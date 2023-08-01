package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/carauction module sentinel errors
var (
	ErrSample            = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidWinner     = sdkerrors.Register(ModuleName, 1101, "Winner address is invalid: %s")
	ErrInvalidBidAmount  = sdkerrors.Register(ModuleName, 1102, "Invalid Bid Amount")
	ErrInvalidMinimumBid = sdkerrors.Register(ModuleName, 1103, "Invalid Minimum Bid Amount")
	ErrInvalidDuration   = sdkerrors.Register(ModuleName, 1104, "Invalid Duration value")
	ErrAuctionNotFound   = sdkerrors.Register(ModuleName, 1105, "Invalid Auction ID")
	ErrAuctionEnd        = sdkerrors.Register(ModuleName, 1106, "Auction was ended")
	ErrSmallBidAmount    = sdkerrors.Register(ModuleName, 1107, "Bid Amount is less than minimum bid amount")
	ErrInvalidBidder     = sdkerrors.Register(ModuleName, 1108, "You do not bid before")
)
