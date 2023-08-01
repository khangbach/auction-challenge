package types

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (storedAuction StoredAuction) GetCreatorAddress() (creator sdk.AccAddress, err error) {
	creator, errCreator := sdk.AccAddressFromBech32(storedAuction.Creator)
	return creator, sdkerrors.Wrapf(errCreator, ErrInvalidWinner.Error(), storedAuction.Creator)
}

func (storedBid StoredBid) GetBidderAddress() (bidder sdk.AccAddress, err error) {
	bidder, errBidder := sdk.AccAddressFromBech32(storedBid.Bidder)
	return bidder, sdkerrors.Wrapf(errBidder, ErrInvalidWinner.Error(), storedBid.Bidder)
}

func (storedAuction StoredAuction) GetMaxBidValue() (maxBid uint64) {
	maxBid = storedAuction.MaxBid
	return maxBid
}

func (storedBid StoredBid) GetBidAmountValue() (bidAmount uint64, err error) {
	bidAmount = storedBid.BidAmount
	var errBidAmount error
	if bidAmount <= 0 {
		errBidAmount = errors.New("Invalid value")
	}
	return bidAmount, sdkerrors.Wrapf(errBidAmount, ErrInvalidBidAmount.Error())
}

func (storedAuction StoredAuction) GetMinimumBidValue() (minimumBid uint64, err error) {
	minimumBid = storedAuction.MinimumBid
	var errMinimumBid error
	if minimumBid <= 0 {
		errMinimumBid = errors.New("Invalid value")
	}
	return minimumBid, sdkerrors.Wrapf(errMinimumBid, ErrInvalidBidAmount.Error())
}

func (storedAuction StoredAuction) GetDurationValue() (duration uint64, err error) {
	duration = storedAuction.Duration
	var errDuration error
	if duration <= 0 {
		errDuration = errors.New("Invalid value")
	}
	return duration, sdkerrors.Wrapf(errDuration, ErrInvalidBidAmount.Error())
}

func (storedAuction StoredAuction) ValidateAuction() (err error) {
	_, err = storedAuction.GetMinimumBidValue()
	if err != nil {
		return err
	}
	_, err = storedAuction.GetDurationValue()
	if err != nil {
		return err
	}
	_, err = storedAuction.GetCreatorAddress()
	return err
}

func (storedBid StoredBid) ValidateBid() (err error) {
	_, err = storedBid.GetBidAmountValue()
	if err != nil {
		return err
	}

	_, err = storedBid.GetBidderAddress()
	return err
}
