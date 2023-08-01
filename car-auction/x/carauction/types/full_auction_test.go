package types_test

import (
	"car-auction/x/carauction/types"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

const (
	alice = "cosmos1jmjfq0tplp9tmx4v9uemw72y4d2wa5nr3xn9d3"
	bob   = "cosmos1xyxs3skf3f4jfqeuv89yyaqvjc6lffavxqhc8g"
)

func GetStoredAuction() types.StoredAuction {
	return types.StoredAuction{
		Index:      "1",
		MinimumBid: 100,
		Duration:   3600,
		StartTime:  1983848937,
		MaxBid:     0,
		Winner:     "",
		Creator:    alice,
	}
}

func GetStoredBid() types.StoredBid {
	return types.StoredBid{
		Index:        "1",
		Bidder:       bob,
		BidAmount:    10,
		AuctionIndex: "1",
		BidTime:      1668248255,
	}
}

func TestGetMaxBidValue(t *testing.T) {
	maxBid := GetStoredAuction().GetMaxBidValue()
	require.Equal(t, maxBid, uint64(0))
}

func TestGetBidAmountValue(t *testing.T) {
	bidAmount, err1 := GetStoredBid().GetBidAmountValue()
	require.Equal(t, bidAmount, uint64(10))
	require.Nil(t, err1)
}

func TestGetBidderAddress(t *testing.T) {
	bobAddress, err1 := sdk.AccAddressFromBech32(bob)
	bidder, err2 := GetStoredBid().GetBidderAddress()
	require.Equal(t, bobAddress, bidder)
	require.Nil(t, err1)
	require.Nil(t, err2)
}

func TestValidateAuction(t *testing.T) {
	err1 := GetStoredAuction().ValidateAuction()
	require.Nil(t, err1)
}

func TestValidateBid(t *testing.T) {
	err1 := GetStoredBid().ValidateBid()
	require.Nil(t, err1)
}
