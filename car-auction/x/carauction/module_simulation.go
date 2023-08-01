package carauction

import (
	"math/rand"

	"car-auction/testutil/sample"
	carauctionsimulation "car-auction/x/carauction/simulation"
	"car-auction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = carauctionsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateAuction = "op_weight_msg_create_auction"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateAuction int = 100

	opWeightMsgBidAuction = "op_weight_msg_bid_auction"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBidAuction int = 100

	opWeightMsgCancelBid = "op_weight_msg_cancel_bid"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelBid int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	carauctionGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&carauctionGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateAuction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateAuction, &weightMsgCreateAuction, nil,
		func(_ *rand.Rand) {
			weightMsgCreateAuction = defaultWeightMsgCreateAuction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateAuction,
		carauctionsimulation.SimulateMsgCreateAuction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBidAuction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBidAuction, &weightMsgBidAuction, nil,
		func(_ *rand.Rand) {
			weightMsgBidAuction = defaultWeightMsgBidAuction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBidAuction,
		carauctionsimulation.SimulateMsgBidAuction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelBid int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancelBid, &weightMsgCancelBid, nil,
		func(_ *rand.Rand) {
			weightMsgCancelBid = defaultWeightMsgCancelBid
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelBid,
		carauctionsimulation.SimulateMsgCancelBid(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
