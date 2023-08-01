package keeper_test

import (
	"car-auction/x/carauction/types"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestCancelBid(t *testing.T) {
	msgServer, _, context := setupMsgServerCreateBid(t)
	createResponse, err := msgServer.BidAuction(context, &types.MsgBidAuction{
		Creator:      bob,
		AuctionIndex: "1",
		BidAmount:    20,
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgBidAuctionResponse{
		BidAmount: 20,
	}, *createResponse)

	_, err1 := msgServer.CancelBid(context, &types.MsgCancelBid{
		Creator:   bob,
		AuctionId: "1",
	})
	require.Nil(t, err1)
}
