package keeper

import (
	"context"
	"strconv"

	"car-auction/x/carauction/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateAuction(goCtx context.Context, msg *types.MsgCreateAuction) (*types.MsgCreateAuctionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}
	newIndex := strconv.FormatUint(systemInfo.AuctionId, 10)

	currentTime := ctx.BlockTime().Unix()

	storedAuction := types.StoredAuction{
		Index:      newIndex,
		MinimumBid: msg.MinimumBid,
		Duration:   msg.Duration,
		StartTime:  uint64(currentTime),
		MaxBid:     0,
		Winner:     "",
		Creator:    msg.Creator,
		IsEnd:      false,
	}

	err := storedAuction.ValidateAuction()
	if err != nil {
		return nil, err
	}

	k.Keeper.SetStoredAuction(ctx, storedAuction)
	systemInfo.AuctionId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)

	ctx.EventManager().EmitTypedEvent(&types.AuctionCreated{
		Creator:    msg.Creator,
		MinimumBid: msg.MinimumBid,
		Duration:   msg.Duration,
	})

	return &types.MsgCreateAuctionResponse{
		AuctionIndex: newIndex,
	}, nil
}
