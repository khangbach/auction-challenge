package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBidAuction = "bid_auction"

var _ sdk.Msg = &MsgBidAuction{}

func NewMsgBidAuction(creator string, auctionIndex string, bidAmount uint64) *MsgBidAuction {
	return &MsgBidAuction{
		Creator:      creator,
		AuctionIndex: auctionIndex,
		BidAmount:    bidAmount,
	}
}

func (msg *MsgBidAuction) Route() string {
	return RouterKey
}

func (msg *MsgBidAuction) Type() string {
	return TypeMsgBidAuction
}

func (msg *MsgBidAuction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBidAuction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBidAuction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
