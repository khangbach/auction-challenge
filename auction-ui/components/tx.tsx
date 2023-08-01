/* eslint-disable */
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { assert } from "@cosmjs/utils"
import { PageResponse } from "./pagination";
import { QueryAllStoredAuctionResponse, QueryClientImpl, QueryGetStoredAuctionResponse, StoredAuction } from "./stored_auction";
import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import { typeUrlMsgCreateAuction, typeUrlMsgCreateAuctionResponse } from "./Client";

export const protobufPackage = "carauction.carauction";

export interface MsgCreateAuction {
  creator: string;
  minimumBid: number;
  duration: number;
}

export interface MsgCreateAuctionResponse {
  auctionIndex: string;
}

export interface MsgCancelBid {
  creator: string;
  auctionId: string;
}

export interface MsgCancelBidResponse {
  bidId: string;
}

function createBaseMsgCreateAuction(): MsgCreateAuction {
  return { creator: "", minimumBid: 0, duration: 0 };
}

export const MsgCreateAuction = {
  encode(message: MsgCreateAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minimumBid !== 0) {
      writer.uint32(16).uint64(message.minimumBid);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.minimumBid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      minimumBid: isSet(object.minimumBid) ? Number(object.minimumBid) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: MsgCreateAuction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.minimumBid !== undefined && (obj.minimumBid = Math.round(message.minimumBid));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuction>, I>>(object: I): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    message.creator = object.creator ?? "";
    message.minimumBid = object.minimumBid ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseMsgCreateAuctionResponse(): MsgCreateAuctionResponse {
  return { auctionIndex: "" };
}

export const MsgCreateAuctionResponse = {
  encode(message: MsgCreateAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionIndex !== "") {
      writer.uint32(10).string(message.auctionIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuctionResponse {
    return { auctionIndex: isSet(object.auctionIndex) ? String(object.auctionIndex) : "" };
  },

  toJSON(message: MsgCreateAuctionResponse): unknown {
    const obj: any = {};
    message.auctionIndex !== undefined && (obj.auctionIndex = message.auctionIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuctionResponse>, I>>(object: I): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    message.auctionIndex = object.auctionIndex ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAuction = this.CreateAuction.bind(this);
  }
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Msg",
      "CreateAuction",
      data
    );
    return promise.then((data) =>
      MsgCreateAuctionResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface SystemInfo {
  auctionId: Long;
  bidId: Long;
}

function createBaseSystemInfo(): SystemInfo {
  return { auctionId: Long.UZERO, bidId: Long.UZERO };
}

export const SystemInfo = {
  encode(
    message: SystemInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (!message.bidId.isZero()) {
      writer.uint32(18).uint64(message.bidId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.bidId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SystemInfo {
    return {
      auctionId: isSet(object.auctionId) ? Long.fromValue(object.auctionId) : Long.UZERO,
      bidId: isSet(object.bidId) ? Long.fromValue(object.bidId) : Long.UZERO,
    };
  },

  toJSON(message: SystemInfo): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidId !== undefined &&
      (obj.bidId = (message.bidId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemInfo>, I>>(
    object: I
  ): SystemInfo {
    const message = createBaseSystemInfo();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.bidId =
      object.bidId !== undefined && object.bidId !== null
        ? Long.fromValue(object.bidId)
        : Long.UZERO;
    return message;
  },
};

export interface AllStoredAuctionResponse {
  storedAuctions: StoredAuction[]
  pagination?: PageResponse
}

export interface AuctionExtension {
  readonly auctions: {
      readonly getSystemInfo: () => Promise<SystemInfo>
      readonly getStoredAuction: (index: string) => Promise<StoredAuction | undefined>
      readonly getAllStoredAuctions: (
          key: Uint8Array,
          offset: Long,
          limit: Long,
          countTotal: boolean,
      ) => Promise<AllStoredAuctionResponse>
  }
}

export function setupAuctionExtension(base: QueryClient): AuctionExtension {
  const rpc = createProtobufRpcClient(base)
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc)

  return {
      auctions: {
          getSystemInfo: async (): Promise<any> => {
              const { SystemInfo } = await queryService.SystemInfo({})
              assert(SystemInfo)
              return SystemInfo
          },
          getStoredAuction: async (index: string): Promise<StoredAuction | undefined> => {
              const response: QueryGetStoredAuctionResponse = await queryService.StoredAuction({
                  index: index,
              })
              return response.storedAuction
          },
          getAllStoredAuctions: async (
              key: Uint8Array,
              offset: Long,
              limit: Long,
              countTotal: boolean,
          ): Promise<AllStoredAuctionResponse> => {
              const response: QueryAllStoredAuctionResponse = await queryService.StoredAuctionAll({
                  pagination: {
                      key: key,
                      offset: offset,
                      limit: limit,
                      countTotal: countTotal,
                      reverse: false,
                  },
              })
              return {
                  storedAuctions: response.storedAuction,
                  pagination: response.pagination,
              }
          },
      },
  }
}

export interface MsgCreateAuctionEncodeObject extends EncodeObject {
  readonly typeUrl: "/carauction.carauction.MsgCreateAuction"
  readonly value: Partial<MsgCreateAuction>
}

export function isMsgCreateGameEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgCreateAuctionEncodeObject {
  return (encodeObject as MsgCreateAuctionEncodeObject).typeUrl === typeUrlMsgCreateAuction
}

export interface MsgCreateAuctionResponseEncodeObject extends EncodeObject {
  readonly typeUrl: "/carauction.carauction.MsgCreateAuctionResponse"
  readonly value: Partial<MsgCreateAuctionResponse>
}

export function isMsgCreateAuctionResponseEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgCreateAuctionResponseEncodeObject {
  return (encodeObject as MsgCreateAuctionResponseEncodeObject).typeUrl === typeUrlMsgCreateAuctionResponse
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export interface MsgBidAuction {
  creator: string;
  auctionIndex: string;
  bidAmount: number;
}

export interface MsgBidAuctionResponse {
  bidAmount: number;
}

function createBaseMsgBidAuction(): MsgBidAuction {
  return { creator: "", auctionIndex: "", bidAmount: 0 };
}

export const MsgBidAuction = {
  encode(message: MsgBidAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auctionIndex !== "") {
      writer.uint32(18).string(message.auctionIndex);
    }
    if (message.bidAmount !== 0) {
      writer.uint32(24).uint64(message.bidAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBidAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.auctionIndex = reader.string();
          break;
        case 3:
          message.bidAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBidAuction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      auctionIndex: isSet(object.auctionIndex) ? String(object.auctionIndex) : "",
      bidAmount: isSet(object.bidAmount) ? Number(object.bidAmount) : 0,
    };
  },

  toJSON(message: MsgBidAuction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionIndex !== undefined && (obj.auctionIndex = message.auctionIndex);
    message.bidAmount !== undefined && (obj.bidAmount = Math.round(message.bidAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBidAuction>, I>>(object: I): MsgBidAuction {
    const message = createBaseMsgBidAuction();
    message.creator = object.creator ?? "";
    message.auctionIndex = object.auctionIndex ?? "";
    message.bidAmount = object.bidAmount ?? 0;
    return message;
  },
};

function createBaseMsgCancelBid(): MsgCancelBid {
  return { creator: "", auctionId: "" };
}

export const MsgCancelBid = {
  encode(message: MsgCancelBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auctionId !== "") {
      writer.uint32(18).string(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.auctionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      auctionId: isSet(object.auctionId) ? String(object.auctionId) : "",
    };
  },

  toJSON(message: MsgCancelBid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBid>, I>>(object: I): MsgCancelBid {
    const message = createBaseMsgCancelBid();
    message.creator = object.creator ?? "";
    message.auctionId = object.auctionId ?? "";
    return message;
  },
};