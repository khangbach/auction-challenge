package carauction_test

import (
	"testing"

	keepertest "car-auction/testutil/keeper"
	"car-auction/testutil/nullify"
	"car-auction/x/carauction"
	"car-auction/x/carauction/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		SystemInfo: types.SystemInfo{
			AuctionId: 82,
		},
		StoredAuctionList: []types.StoredAuction{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		StoredBidList: []types.StoredBid{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, genesisState)
	got := carauction.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.SystemInfo, got.SystemInfo)
	require.ElementsMatch(t, genesisState.StoredAuctionList, got.StoredAuctionList)
	require.ElementsMatch(t, genesisState.StoredBidList, got.StoredBidList)
	// this line is used by starport scaffolding # genesis/test/assert
}
