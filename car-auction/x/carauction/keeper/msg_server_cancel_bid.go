package keeper

import (
	"context"

	"car-auction/x/carauction/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CancelBid(goCtx context.Context, msg *types.MsgCancelBid) (*types.MsgCancelBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	existBid := k.GetStoredBidByBidder(ctx, msg.Creator, msg.AuctionId)
	if existBid.Index == "" {
		return nil, sdkerrors.Wrapf(types.ErrInvalidBidder, "%s", existBid.Index)
	}

	existBid.IsCancelled = true
	k.Keeper.SetStoredBid(ctx, existBid)

	var bidsList = k.GetAllStoredBidByAuctionId(ctx, msg.AuctionId)
	var maxBid uint64 = 0

	storedAuction, found := k.Keeper.GetStoredAuction(ctx, msg.AuctionId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrAuctionNotFound, "%s", msg.AuctionId)
	}
	for _, bid := range bidsList {
		if bid.BidAmount > maxBid && !bid.IsCancelled {
			storedAuction.MaxBid = bid.BidAmount
		}
	}
	k.Keeper.SetStoredAuction(ctx, storedAuction)

	ctx.EventManager().EmitTypedEvent(&types.CancelBid{
		Creator:      msg.Creator,
		AuctionIndex: msg.AuctionId,
		BidIndex:     existBid.Index,
	})

	return &types.MsgCancelBidResponse{
		BidId: existBid.Index,
	}, nil
}
