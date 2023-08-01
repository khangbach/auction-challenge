package keeper

import (
	"car-auction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetStoredAuction set a specific storedAuction in the store from its index
func (k Keeper) SetStoredAuction(ctx sdk.Context, storedAuction types.StoredAuction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredAuctionKeyPrefix))
	b := k.cdc.MustMarshal(&storedAuction)
	store.Set(types.StoredAuctionKey(
		storedAuction.Index,
	), b)
}

// GetStoredAuction returns a storedAuction from its index
func (k Keeper) GetStoredAuction(
	ctx sdk.Context,
	index string,

) (val types.StoredAuction, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredAuctionKeyPrefix))

	b := store.Get(types.StoredAuctionKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredAuction removes a storedAuction from the store
func (k Keeper) RemoveStoredAuction(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredAuctionKeyPrefix))
	store.Delete(types.StoredAuctionKey(
		index,
	))
}

// GetAllStoredAuction returns all storedAuction
func (k Keeper) GetAllStoredAuction(ctx sdk.Context) (list []types.StoredAuction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredAuctionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredAuction
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
