package keeper_test

import (
	"car-auction/x/carauction"
	"car-auction/x/carauction/keeper"
	"car-auction/x/carauction/types"
	"context"
	"testing"

	keepertest "car-auction/testutil/keeper"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

const (
	bob   = "cosmos1xyxs3skf3f4jfqeuv89yyaqvjc6lffavxqhc8g"
	carol = "cosmos1e0w5t53nrq7p66fye6c8p0ynyhf6y24l4yuxd7"
)

func setupMsgServerCreateBid(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, *types.DefaultGenesis())
	server := keeper.NewMsgServerImpl(*k)
	context := sdk.WrapSDKContext(ctx)
	server.CreateAuction(context, &types.MsgCreateAuction{
		Creator:    alice,
		MinimumBid: 100,
		Duration:   3600,
	})
	return server, *k, context
}

func TestBidAuction(t *testing.T) {
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

	createResponseCrarol, err1 := msgServer.BidAuction(context, &types.MsgBidAuction{
		Creator:      bob,
		AuctionIndex: "1",
		BidAmount:    30,
	})
	require.Nil(t, err1)
	require.EqualValues(t, types.MsgBidAuctionResponse{
		BidAmount: 30,
	}, *createResponseCrarol)
}
