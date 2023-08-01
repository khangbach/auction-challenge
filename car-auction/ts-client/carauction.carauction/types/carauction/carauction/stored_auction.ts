/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

export interface StoredAuction {
  index: string;
  duration: number;
  minimumBid: number;
  startTime: number;
  maxBid: number;
  winner: string;
  creator: string;
  isEnd: boolean;
}

function createBaseStoredAuction(): StoredAuction {
  return { index: "", duration: 0, minimumBid: 0, startTime: 0, maxBid: 0, winner: "", creator: "", isEnd: false };
}

export const StoredAuction = {
  encode(message: StoredAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.duration !== 0) {
      writer.uint32(16).uint64(message.duration);
    }
    if (message.minimumBid !== 0) {
      writer.uint32(24).uint64(message.minimumBid);
    }
    if (message.startTime !== 0) {
      writer.uint32(32).uint64(message.startTime);
    }
    if (message.maxBid !== 0) {
      writer.uint32(40).uint64(message.maxBid);
    }
    if (message.winner !== "") {
      writer.uint32(50).string(message.winner);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    if (message.isEnd === true) {
      writer.uint32(64).bool(message.isEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.minimumBid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.startTime = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.maxBid = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.winner = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        case 8:
          message.isEnd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredAuction {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      minimumBid: isSet(object.minimumBid) ? Number(object.minimumBid) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      maxBid: isSet(object.maxBid) ? Number(object.maxBid) : 0,
      winner: isSet(object.winner) ? String(object.winner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      isEnd: isSet(object.isEnd) ? Boolean(object.isEnd) : false,
    };
  },

  toJSON(message: StoredAuction): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.minimumBid !== undefined && (obj.minimumBid = Math.round(message.minimumBid));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.maxBid !== undefined && (obj.maxBid = Math.round(message.maxBid));
    message.winner !== undefined && (obj.winner = message.winner);
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnd !== undefined && (obj.isEnd = message.isEnd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredAuction>, I>>(object: I): StoredAuction {
    const message = createBaseStoredAuction();
    message.index = object.index ?? "";
    message.duration = object.duration ?? 0;
    message.minimumBid = object.minimumBid ?? 0;
    message.startTime = object.startTime ?? 0;
    message.maxBid = object.maxBid ?? 0;
    message.winner = object.winner ?? "";
    message.creator = object.creator ?? "";
    message.isEnd = object.isEnd ?? false;
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
