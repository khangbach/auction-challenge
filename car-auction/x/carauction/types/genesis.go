package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SystemInfo: SystemInfo{
			AuctionId: uint64(DefaultIndex),
			BidId:     uint64(DefaultIndex),
		},
		StoredAuctionList: []StoredAuction{},
		StoredBidList:     []StoredBid{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in storedAuction
	storedAuctionIndexMap := make(map[string]struct{})

	for _, elem := range gs.StoredAuctionList {
		index := string(StoredAuctionKey(elem.Index))
		if _, ok := storedAuctionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for storedAuction")
		}
		storedAuctionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in storedBid
	storedBidIndexMap := make(map[string]struct{})

	for _, elem := range gs.StoredBidList {
		index := string(StoredBidKey(elem.Index))
		if _, ok := storedBidIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for storedBid")
		}
		storedBidIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
