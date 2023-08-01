import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { SigningStargateClient, SigningStargateClientOptions, QueryClient, defaultRegistryTypes, StdFee, DeliverTxResponse, coins } from '@cosmjs/stargate';
import { GeneratedType, OfflineSigner, Registry, isTxBodyEncodeObject } from "@cosmjs/proto-signing"
import {
    MsgCreateAuction,
    MsgCreateAuctionEncodeObject,
    MsgCreateAuctionResponse,
    setupAuctionExtension,
    MsgBidAuction,
    MsgCancelBid
} from "./tx"

export const typeUrlMsgCreateAuction = "/carauction.carauction.MsgCreateAuction"
export const typeUrlMsgBidAuction = "/carauction.carauction.MsgBidAuction"
export const typeUrlMsgCancelBid = "/carauction.carauction.MsgCancelBid"
export const typeUrlMsgCreateAuctionResponse = "/carauction.carauction.MsgCreateAuctionResponse"

export const auctionTypes: ReadonlyArray<[string, GeneratedType]> = [
    [typeUrlMsgCreateAuction, MsgCreateAuction],
    [typeUrlMsgCreateAuctionResponse, MsgCreateAuctionResponse],
    [typeUrlMsgBidAuction, MsgBidAuction],
    [typeUrlMsgCancelBid, MsgCancelBid],
]

export const auctionDefaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    ...auctionTypes,
]

export interface BroadcastTxParams {
    readonly tx: Uint8Array;
}

function createDefaultRegistry(): Registry {
    return new Registry(auctionDefaultRegistryTypes)
}

export class AuctionSigningStargateClient extends SigningStargateClient {
    public readonly auctionQueryClient: any

    public static async connectWithSigner(
        endpoint: string,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {},
    ): Promise<AuctionSigningStargateClient> {
        const tmClient = await Tendermint34Client.connect(endpoint)
        return new AuctionSigningStargateClient(tmClient, signer, {
            registry: createDefaultRegistry(),
            ...options,
        })
    }

    protected constructor(
        tmClient: Tendermint34Client | undefined,
        signer: OfflineSigner,
        options: SigningStargateClientOptions,
    ) {
        super(tmClient, signer, options)
        if (tmClient) {
            this.auctionQueryClient = QueryClient.withExtensions(tmClient, setupAuctionExtension)
        }
    }

    public async createAuction(
        creator: string,
        minimumBid: number,
        duration: number,
        fee: number | "auto" | StdFee,
        memo = "",
    ): Promise<DeliverTxResponse> {
        const createMsg = {
            typeUrl: typeUrlMsgCreateAuction,
            value: {
                creator: creator,
                minimumBid: minimumBid,
                duration: duration,
            },
        }
        return await this.signAndBroadcast(creator, [createMsg], fee, memo)
    }

    public async bidAuction(
        creator: string,
        auctionIndex: string,
        bidAmount: number,
        fee: number | "auto" | StdFee,
        memo = "",
    ): Promise<DeliverTxResponse> {
        const createMsg = {
            typeUrl: typeUrlMsgBidAuction,
            value: {
                creator: creator,
                auctionIndex,
                bidAmount,
            },
        }
        return await this.signAndBroadcast(creator, [createMsg], fee, memo)
    }

    public async cancelBid(
        creator: string,
        auctionId: string,
        fee: number | "auto" | StdFee,
        memo = "",
    ): Promise<DeliverTxResponse> {
        const createMsg = {
            typeUrl: typeUrlMsgCancelBid,
            value: {
                creator: creator,
                auctionId,
            },
        }
        return await this.signAndBroadcast(creator, [createMsg], fee, memo)
    }
}
