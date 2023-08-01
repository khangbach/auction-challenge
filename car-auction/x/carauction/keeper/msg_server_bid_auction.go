package keeper

import (
	"context"
	"strconv"

	"car-auction/x/carauction/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BidAuction(goCtx context.Context, msg *types.MsgBidAuction) (*types.MsgBidAuctionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	storedAuction, found := k.Keeper.GetStoredAuction(ctx, msg.AuctionIndex)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrAuctionNotFound, "%s", msg.AuctionIndex)
	}

	currentTime := ctx.BlockTime().Unix()

	if storedAuction.IsEnd {
		return nil, sdkerrors.Wrapf(types.ErrAuctionEnd, "%s")
	}

	if msg.BidAmount < storedAuction.MinimumBid {
		return nil, sdkerrors.Wrapf(types.ErrSmallBidAmount, "%s")
	}
	if msg.BidAmount <= storedAuction.MaxBid {
		return nil, sdkerrors.Wrapf(types.ErrInvalidBidAmount, "%s")
	}

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}
	bidIndex := strconv.FormatUint(systemInfo.BidId, 10)

	existBid := k.GetStoredBidByBidder(ctx, msg.Creator, msg.AuctionIndex)

	storedBid := types.StoredBid{
		Index:        bidIndex,
		Bidder:       msg.Creator,
		BidAmount:    msg.BidAmount,
		AuctionIndex: msg.AuctionIndex,
		BidTime:      uint64(currentTime),
		IsCancelled:  false,
	}

	if existBid.Index != "" {
		storedBid.Index = existBid.Index
	} else {
		systemInfo.BidId++
		k.Keeper.SetSystemInfo(ctx, systemInfo)
	}

	err := storedBid.ValidateBid()
	if err != nil {
		return nil, err
	}

	k.Keeper.SetStoredBid(ctx, storedBid)

	storedAuction.MaxBid = msg.BidAmount
	k.Keeper.SetStoredAuction(ctx, storedAuction)

	ctx.EventManager().EmitTypedEvent(&types.BidCreated{
		Creator:      msg.Creator,
		AuctionIndex: msg.AuctionIndex,
		BidAmount:    msg.BidAmount,
	})

	return &types.MsgBidAuctionResponse{
		BidAmount: msg.BidAmount,
	}, nil
}
