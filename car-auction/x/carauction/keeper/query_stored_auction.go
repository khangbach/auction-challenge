package keeper

import (
	"context"

	"car-auction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) StoredAuctionAll(goCtx context.Context, req *types.QueryAllStoredAuctionRequest) (*types.QueryAllStoredAuctionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedAuctions []types.StoredAuction
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	storedAuctionStore := prefix.NewStore(store, types.KeyPrefix(types.StoredAuctionKeyPrefix))

	pageRes, err := query.Paginate(storedAuctionStore, req.Pagination, func(key []byte, value []byte) error {
		var storedAuction types.StoredAuction
		if err := k.cdc.Unmarshal(value, &storedAuction); err != nil {
			return err
		}

		storedAuctions = append(storedAuctions, storedAuction)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredAuctionResponse{StoredAuction: storedAuctions, Pagination: pageRes}, nil
}

func (k Keeper) StoredAuction(goCtx context.Context, req *types.QueryGetStoredAuctionRequest) (*types.QueryGetStoredAuctionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetStoredAuction(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredAuctionResponse{StoredAuction: val}, nil
}
