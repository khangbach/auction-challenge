package keeper

import (
	"car-auction/x/carauction/types"
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) CheckEndAuction(goCtx context.Context) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentTime := ctx.BlockTime().Unix()

	var auctionList = k.GetAllStoredAuction(ctx)

	for _, auction := range auctionList {
		if currentTime > int64(auction.StartTime+auction.Duration) && !auction.IsEnd {
			var bidsList = k.GetAllStoredBidByAuctionId(ctx, auction.Index)
			var maxBid uint64 = 0
			var updateAuction = auction
			for _, bid := range bidsList {
				if bid.BidAmount > maxBid && !bid.IsCancelled {
					updateAuction.MaxBid = bid.BidAmount
					updateAuction.Winner = bid.Bidder
				}
			}
			updateAuction.IsEnd = true
			k.SetStoredAuction(ctx, updateAuction)

			ctx.EventManager().EmitTypedEvent(&types.EndAuction{
				Creator:      updateAuction.Creator,
				AuctionIndex: updateAuction.Index,
				BidAmount:    updateAuction.MaxBid,
				Winner:       updateAuction.Winner,
			})

		}
	}

}
