/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

export interface StoredBid {
  index: string;
  bidder: string;
  bidAmount: number;
  auctionIndex: string;
  bidTime: number;
  isCancelled: boolean;
}

function createBaseStoredBid(): StoredBid {
  return { index: "", bidder: "", bidAmount: 0, auctionIndex: "", bidTime: 0, isCancelled: false };
}

export const StoredBid = {
  encode(message: StoredBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.bidAmount !== 0) {
      writer.uint32(24).uint64(message.bidAmount);
    }
    if (message.auctionIndex !== "") {
      writer.uint32(34).string(message.auctionIndex);
    }
    if (message.bidTime !== 0) {
      writer.uint32(40).uint64(message.bidTime);
    }
    if (message.isCancelled === true) {
      writer.uint32(48).bool(message.isCancelled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.bidAmount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.auctionIndex = reader.string();
          break;
        case 5:
          message.bidTime = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.isCancelled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredBid {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bidAmount: isSet(object.bidAmount) ? Number(object.bidAmount) : 0,
      auctionIndex: isSet(object.auctionIndex) ? String(object.auctionIndex) : "",
      bidTime: isSet(object.bidTime) ? Number(object.bidTime) : 0,
      isCancelled: isSet(object.isCancelled) ? Boolean(object.isCancelled) : false,
    };
  },

  toJSON(message: StoredBid): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bidAmount !== undefined && (obj.bidAmount = Math.round(message.bidAmount));
    message.auctionIndex !== undefined && (obj.auctionIndex = message.auctionIndex);
    message.bidTime !== undefined && (obj.bidTime = Math.round(message.bidTime));
    message.isCancelled !== undefined && (obj.isCancelled = message.isCancelled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredBid>, I>>(object: I): StoredBid {
    const message = createBaseStoredBid();
    message.index = object.index ?? "";
    message.bidder = object.bidder ?? "";
    message.bidAmount = object.bidAmount ?? 0;
    message.auctionIndex = object.auctionIndex ?? "";
    message.bidTime = object.bidTime ?? 0;
    message.isCancelled = object.isCancelled ?? false;
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
