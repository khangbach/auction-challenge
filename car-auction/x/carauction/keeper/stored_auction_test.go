package keeper_test

import (
	"strconv"
	"testing"

	keepertest "car-auction/testutil/keeper"
	"car-auction/testutil/nullify"
	"car-auction/x/carauction/keeper"
	"car-auction/x/carauction/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoredAuction(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredAuction {
	items := make([]types.StoredAuction, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetStoredAuction(ctx, items[i])
	}
	return items
}

func TestStoredAuctionGet(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNStoredAuction(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredAuction(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredAuctionRemove(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNStoredAuction(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredAuction(ctx,
			item.Index,
		)
		_, found := keeper.GetStoredAuction(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestStoredAuctionGetAll(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNStoredAuction(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredAuction(ctx)),
	)
}
