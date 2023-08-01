package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredAuctionKeyPrefix is the prefix to retrieve all StoredAuction
	StoredAuctionKeyPrefix = "StoredAuction/value/"
)

// StoredAuctionKey returns the store key to retrieve a StoredAuction from the index fields
func StoredAuctionKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
