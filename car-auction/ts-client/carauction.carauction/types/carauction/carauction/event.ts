/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

export interface AuctionCreated {
  creator: string;
  minimumBid: number;
  duration: number;
}

export interface BidCreated {
  creator: string;
  auctionIndex: string;
  bidAmount: number;
}

export interface EndAuction {
  creator: string;
  auctionIndex: string;
  bidAmount: number;
  winner: string;
}

export interface CancelBid {
  creator: string;
  auctionIndex: string;
  bidIndex: string;
}

function createBaseAuctionCreated(): AuctionCreated {
  return { creator: "", minimumBid: 0, duration: 0 };
}

export const AuctionCreated = {
  encode(message: AuctionCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionCreated();
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

  fromJSON(object: any): AuctionCreated {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      minimumBid: isSet(object.minimumBid) ? Number(object.minimumBid) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: AuctionCreated): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.minimumBid !== undefined && (obj.minimumBid = Math.round(message.minimumBid));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionCreated>, I>>(object: I): AuctionCreated {
    const message = createBaseAuctionCreated();
    message.creator = object.creator ?? "";
    message.minimumBid = object.minimumBid ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseBidCreated(): BidCreated {
  return { creator: "", auctionIndex: "", bidAmount: 0 };
}

export const BidCreated = {
  encode(message: BidCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BidCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidCreated();
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

  fromJSON(object: any): BidCreated {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      auctionIndex: isSet(object.auctionIndex) ? String(object.auctionIndex) : "",
      bidAmount: isSet(object.bidAmount) ? Number(object.bidAmount) : 0,
    };
  },

  toJSON(message: BidCreated): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionIndex !== undefined && (obj.auctionIndex = message.auctionIndex);
    message.bidAmount !== undefined && (obj.bidAmount = Math.round(message.bidAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BidCreated>, I>>(object: I): BidCreated {
    const message = createBaseBidCreated();
    message.creator = object.creator ?? "";
    message.auctionIndex = object.auctionIndex ?? "";
    message.bidAmount = object.bidAmount ?? 0;
    return message;
  },
};

function createBaseEndAuction(): EndAuction {
  return { creator: "", auctionIndex: "", bidAmount: 0, winner: "" };
}

export const EndAuction = {
  encode(message: EndAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auctionIndex !== "") {
      writer.uint32(18).string(message.auctionIndex);
    }
    if (message.bidAmount !== 0) {
      writer.uint32(24).uint64(message.bidAmount);
    }
    if (message.winner !== "") {
      writer.uint32(42).string(message.winner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndAuction();
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
        case 5:
          message.winner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EndAuction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      auctionIndex: isSet(object.auctionIndex) ? String(object.auctionIndex) : "",
      bidAmount: isSet(object.bidAmount) ? Number(object.bidAmount) : 0,
      winner: isSet(object.winner) ? String(object.winner) : "",
    };
  },

  toJSON(message: EndAuction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionIndex !== undefined && (obj.auctionIndex = message.auctionIndex);
    message.bidAmount !== undefined && (obj.bidAmount = Math.round(message.bidAmount));
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EndAuction>, I>>(object: I): EndAuction {
    const message = createBaseEndAuction();
    message.creator = object.creator ?? "";
    message.auctionIndex = object.auctionIndex ?? "";
    message.bidAmount = object.bidAmount ?? 0;
    message.winner = object.winner ?? "";
    return message;
  },
};

function createBaseCancelBid(): CancelBid {
  return { creator: "", auctionIndex: "", bidIndex: "" };
}

export const CancelBid = {
  encode(message: CancelBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auctionIndex !== "") {
      writer.uint32(18).string(message.auctionIndex);
    }
    if (message.bidIndex !== "") {
      writer.uint32(26).string(message.bidIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelBid();
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
          message.bidIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      auctionIndex: isSet(object.auctionIndex) ? String(object.auctionIndex) : "",
      bidIndex: isSet(object.bidIndex) ? String(object.bidIndex) : "",
    };
  },

  toJSON(message: CancelBid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionIndex !== undefined && (obj.auctionIndex = message.auctionIndex);
    message.bidIndex !== undefined && (obj.bidIndex = message.bidIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelBid>, I>>(object: I): CancelBid {
    const message = createBaseCancelBid();
    message.creator = object.creator ?? "";
    message.auctionIndex = object.auctionIndex ?? "";
    message.bidIndex = object.bidIndex ?? "";
    return message;
  },
};

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
