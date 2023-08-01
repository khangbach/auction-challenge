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
	alice = "cosmos1jmjfq0tplp9tmx4v9uemw72y4d2wa5nr3xn9d3"
)

func setupMsgServerCreateAuction(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, *types.DefaultGenesis())
	return keeper.NewMsgServerImpl(*k), *k, sdk.WrapSDKContext(ctx)
}

func TestCreateAuction(t *testing.T) {
	msgServer, _, context := setupMsgServerCreateAuction(t)
	createResponse, err := msgServer.CreateAuction(context, &types.MsgCreateAuction{
		Creator:    alice,
		MinimumBid: 100,
		Duration:   3600,
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgCreateAuctionResponse{
		AuctionIndex: "1",
	}, *createResponse)
}
