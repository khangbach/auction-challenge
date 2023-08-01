/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

export interface MsgCreateAuction {
  creator: string;
  minimumBid: number;
  duration: number;
}

export interface MsgCreateAuctionResponse {
  auctionIndex: string;
}

export interface MsgBidAuction {
  creator: string;
  auctionIndex: string;
  bidAmount: number;
}

export interface MsgBidAuctionResponse {
  bidAmount: number;
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

function createBaseMsgBidAuctionResponse(): MsgBidAuctionResponse {
  return { bidAmount: 0 };
}

export const MsgBidAuctionResponse = {
  encode(message: MsgBidAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidAmount !== 0) {
      writer.uint32(8).uint64(message.bidAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBidAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBidAuctionResponse {
    return { bidAmount: isSet(object.bidAmount) ? Number(object.bidAmount) : 0 };
  },

  toJSON(message: MsgBidAuctionResponse): unknown {
    const obj: any = {};
    message.bidAmount !== undefined && (obj.bidAmount = Math.round(message.bidAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBidAuctionResponse>, I>>(object: I): MsgBidAuctionResponse {
    const message = createBaseMsgBidAuctionResponse();
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

function createBaseMsgCancelBidResponse(): MsgCancelBidResponse {
  return { bidId: "" };
}

export const MsgCancelBidResponse = {
  encode(message: MsgCancelBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== "") {
      writer.uint32(10).string(message.bidId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelBidResponse {
    return { bidId: isSet(object.bidId) ? String(object.bidId) : "" };
  },

  toJSON(message: MsgCancelBidResponse): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBidResponse>, I>>(object: I): MsgCancelBidResponse {
    const message = createBaseMsgCancelBidResponse();
    message.bidId = object.bidId ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
  BidAuction(request: MsgBidAuction): Promise<MsgBidAuctionResponse>;
  CancelBid(request: MsgCancelBid): Promise<MsgCancelBidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAuction = this.CreateAuction.bind(this);
    this.BidAuction = this.BidAuction.bind(this);
    this.CancelBid = this.CancelBid.bind(this);
  }
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Msg", "CreateAuction", data);
    return promise.then((data) => MsgCreateAuctionResponse.decode(new _m0.Reader(data)));
  }

  BidAuction(request: MsgBidAuction): Promise<MsgBidAuctionResponse> {
    const data = MsgBidAuction.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Msg", "BidAuction", data);
    return promise.then((data) => MsgBidAuctionResponse.decode(new _m0.Reader(data)));
  }

  CancelBid(request: MsgCancelBid): Promise<MsgCancelBidResponse> {
    const data = MsgCancelBid.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Msg", "CancelBid", data);
    return promise.then((data) => MsgCancelBidResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
