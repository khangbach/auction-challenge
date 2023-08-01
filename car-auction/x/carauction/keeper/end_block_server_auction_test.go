package keeper_test

import (
	"context"
	"testing"

	keepertest "car-auction/testutil/keeper"
	"car-auction/x/carauction"
	"car-auction/x/carauction/keeper"
	"car-auction/x/carauction/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServerAuction(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, *types.DefaultGenesis())
	server := keeper.NewMsgServerImpl(*k)
	context := sdk.WrapSDKContext(ctx)
	return server, *k, context
}

func TestCheckAuction(t *testing.T) {
	_, keeper, context := setupMsgServerAuction(t)
	keeper.CheckEndAuction(context)

	_, ctx := keepertest.CarauctionKeeper(t)
	var _ = ctx.BlockHeight()

}
