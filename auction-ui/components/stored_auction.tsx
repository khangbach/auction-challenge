/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "./pagination";
import { Params } from "./params";
import { SystemInfo } from "./tx";

export const protobufPackage = "carauction.carauction";

export interface StoredAuction {
  index: string;
  duration: Long;
  minimumBid: Long;
  startTime: Long;
  maxBid: Long;
  winner: string;
  creator: string;
  isEnd: boolean;
}

function createBaseStoredAuction(): StoredAuction {
  return {
    index: "",
    duration: Long.UZERO,
    minimumBid: Long.UZERO,
    startTime: Long.UZERO,
    maxBid: Long.UZERO,
    winner: "",
    creator: "",
    isEnd: false,
  };
}

export const StoredAuction = {
  encode(
    message: StoredAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.duration.isZero()) {
      writer.uint32(18).uint64(message.duration);
    }
    if (!message.minimumBid.isZero()) {
      writer.uint32(28).uint64(message.minimumBid);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(38).uint64(message.startTime);
    }
    if (!message.maxBid.isZero()) {
      writer.uint32(48).uint64(message.maxBid);
    }
    if (message.winner !== "") {
      writer.uint32(58).string(message.winner);
    }
    if (message.creator !== "") {
      writer.uint32(64).string(message.creator);
    }
    if (message.isEnd !== false) {
      writer.uint32(42).bool(message.isEnd);
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
          message.duration = reader.uint64() as Long;
          break;
        case 3:
          message.minimumBid = reader.uint64() as Long;
          break;
        case 4:
          message.startTime = reader.uint64() as Long;
          break;
        case 5:
          message.maxBid = reader.uint64() as Long;
          break;
        case 6:
          message.winner = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        case 8:
          message.isEnd = reader.bool() as boolean;
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
      duration: isSet(object.duration)
        ? Long.fromValue(object.duration)
        : Long.UZERO,
      minimumBid: isSet(object.minimumBid)
        ? Long.fromValue(object.minimumBid)
        : Long.UZERO,
      startTime: isSet(object.startTime)
        ? Long.fromValue(object.startTime)
        : Long.UZERO,
      maxBid: isSet(object.maxBid)
        ? Long.fromValue(object.maxBid)
        : Long.UZERO,
      winner: isSet(object.winner) ? String(object.winner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      isEnd: isSet(object.isEnd) ? object.isEnd : false,
    };
  },

  toJSON(message: StoredAuction): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.duration !== undefined &&
      (obj.duration = (message.duration || Long.UZERO).toString());
    message.minimumBid !== undefined &&
      (obj.minimumBid = (message.minimumBid || Long.UZERO).toString());
    message.startTime !== undefined &&
      (obj.startTime = (message.startTime || Long.UZERO).toString());
    message.maxBid !== undefined &&
      (obj.maxBid = (message.maxBid || Long.UZERO).toString());
    message.winner !== undefined && (obj.winner = message.winner);
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnd !== undefined && (obj.isEnd = (message.isEnd || false).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredAuction>, I>>(
    object: I
  ): StoredAuction {
    const message = createBaseStoredAuction();
    message.index = object.index ?? "";
    message.duration =
        object.duration !== undefined && object.duration !== null
          ? Long.fromValue(object.duration)
          : Long.UZERO;
    message.minimumBid =
      object.minimumBid !== undefined && object.minimumBid !== null
        ? Long.fromValue(object.minimumBid)
        : Long.UZERO;
    message.startTime =
        object.startTime !== undefined && object.startTime !== null
          ? Long.fromValue(object.startTime)
          : Long.UZERO;
    message.maxBid =
        object.maxBid !== undefined && object.maxBid !== null
          ? Long.fromValue(object.maxBid)
          : Long.UZERO;
    message.winner = object.winner ?? "";
    message.creator = object.creator ?? "";
    message.isEnd = object.isEnd ?? false;
    return message;
  },
};

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

export interface QueryGetStoredAuctionResponse {
    storedAuction?: StoredAuction;
}

export interface QueryAllStoredAuctionResponse {
    storedAuction: StoredAuction[];
    pagination?: PageResponse;
}

export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetSystemInfoRequest {}

export interface QueryGetSystemInfoResponse {
  SystemInfo?: SystemInfo;
}

export interface QueryGetStoredAuctionRequest {
    index: string;
}

export interface QueryGetStoredAuctionResponse {
    storedAuction?: StoredAuction;
}

export interface QueryAllStoredAuctionRequest {
    pagination?: PageRequest;
}

export interface QueryAllStoredAuctionResponse {
    storedAuction: StoredAuction[];
    pagination?: PageResponse;
}
/** Query defines the gRPC querier service. */
export interface Query {
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    
    SystemInfo(
      request: QueryGetSystemInfoRequest
    ): Promise<QueryGetSystemInfoResponse>;
    
    StoredAuction(
      request: QueryGetStoredAuctionRequest
    ): Promise<QueryGetStoredAuctionResponse>;
    
    StoredAuctionAll(
      request: QueryAllStoredAuctionRequest
    ): Promise<QueryAllStoredAuctionResponse>;
}

interface Rpc {
    request(
      service: string,
      method: string,
      data: Uint8Array
    ): Promise<Uint8Array>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
      this.rpc = rpc;
      this.Params = this.Params.bind(this);
      this.SystemInfo = this.SystemInfo.bind(this);
      this.StoredAuction = this.StoredAuction.bind(this);
      this.StoredAuctionAll = this.StoredAuctionAll.bind(this);
    }
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
      const data = QueryParamsRequest.encode(request).finish();
      const promise = this.rpc.request(
        "carauction.carauction.Query",
        "Params",
        data
      );
      return promise.then((data) =>
        QueryParamsResponse.decode(new _m0.Reader(data))
      );
    }
  
    SystemInfo(
      request: QueryGetSystemInfoRequest
    ): Promise<QueryGetSystemInfoResponse> {
      const data = QueryGetSystemInfoRequest.encode(request).finish();
      const promise = this.rpc.request(
        "carauction.carauction.Query",
        "SystemInfo",
        data
      );
      return promise.then((data) =>
        QueryGetSystemInfoResponse.decode(new _m0.Reader(data))
      );
    }
  
    StoredAuction(
      request: QueryGetStoredAuctionRequest
    ): Promise<QueryGetStoredAuctionResponse> {
      const data = QueryGetStoredAuctionRequest.encode(request).finish();
      const promise = this.rpc.request(
        "carauction.carauction.Query",
        "StoredAuction",
        data
      );
      return promise.then((data) =>
        QueryGetStoredAuctionResponse.decode(new _m0.Reader(data))
      );
    }
  
    StoredAuctionAll(
      request: QueryAllStoredAuctionRequest
    ): Promise<QueryAllStoredAuctionResponse> {
      const data = QueryAllStoredAuctionRequest.encode(request).finish();
      const promise = this.rpc.request(
        "carauction.carauction.Query",
        "StoredAuctionAll",
        data
      );
      return promise.then((data) =>
        QueryAllStoredAuctionResponse.decode(new _m0.Reader(data))
      );
    }
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
    return {};
  }
  
  export const QueryParamsRequest = {
    encode(
      _: QueryParamsRequest,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      return writer;
    },
  
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryParamsRequest();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(_: any): QueryParamsRequest {
      return {};
    },
  
    toJSON(_: QueryParamsRequest): unknown {
      const obj: any = {};
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
      _: I
    ): QueryParamsRequest {
      const message = createBaseQueryParamsRequest();
      return message;
    },
  };
  
  function createBaseQueryParamsResponse(): QueryParamsResponse {
    return { params: undefined };
  }
  
  export const QueryParamsResponse = {
    encode(
      message: QueryParamsResponse,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      if (message.params !== undefined) {
        Params.encode(message.params, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
  
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryParamsResponse();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.params = Params.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(object: any): QueryParamsResponse {
      return {
        params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      };
    },
  
    toJSON(message: QueryParamsResponse): unknown {
      const obj: any = {};
      message.params !== undefined &&
        (obj.params = message.params ? Params.toJSON(message.params) : undefined);
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
      object: I
    ): QueryParamsResponse {
      const message = createBaseQueryParamsResponse();
      message.params =
        object.params !== undefined && object.params !== null
          ? Params.fromPartial(object.params)
          : undefined;
      return message;
    },
  };

  function createBaseQueryGetSystemInfoRequest(): QueryGetSystemInfoRequest {
    return {};
  }
  
  export const QueryGetSystemInfoRequest = {
    encode(
      _: QueryGetSystemInfoRequest,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      return writer;
    },
  
    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): QueryGetSystemInfoRequest {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryGetSystemInfoRequest();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(_: any): QueryGetSystemInfoRequest {
      return {};
    },
  
    toJSON(_: QueryGetSystemInfoRequest): unknown {
      const obj: any = {};
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoRequest>, I>>(
      _: I
    ): QueryGetSystemInfoRequest {
      const message = createBaseQueryGetSystemInfoRequest();
      return message;
    },
  };
  
  function createBaseQueryGetSystemInfoResponse(): QueryGetSystemInfoResponse {
    return { SystemInfo: undefined };
  }
  
  export const QueryGetSystemInfoResponse = {
    encode(
      message: QueryGetSystemInfoResponse,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      if (message.SystemInfo !== undefined) {
        SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
  
    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): QueryGetSystemInfoResponse {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryGetSystemInfoResponse();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.SystemInfo = SystemInfo.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(object: any): QueryGetSystemInfoResponse {
      return {
        SystemInfo: isSet(object.SystemInfo)
          ? SystemInfo.fromJSON(object.SystemInfo)
          : undefined,
      };
    },
  
    toJSON(message: QueryGetSystemInfoResponse): unknown {
      const obj: any = {};
      message.SystemInfo !== undefined &&
        (obj.SystemInfo = message.SystemInfo
          ? SystemInfo.toJSON(message.SystemInfo)
          : undefined);
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoResponse>, I>>(
      object: I
    ): QueryGetSystemInfoResponse {
      const message = createBaseQueryGetSystemInfoResponse();
      message.SystemInfo =
        object.SystemInfo !== undefined && object.SystemInfo !== null
          ? SystemInfo.fromPartial(object.SystemInfo)
          : undefined;
      return message;
    },
  };

  function createBaseQueryGetStoredAuctionRequest(): QueryGetStoredAuctionRequest {
    return { index: "" };
  }
  
  export const QueryGetStoredAuctionRequest = {
    encode(
      message: QueryGetStoredAuctionRequest,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      if (message.index !== "") {
        writer.uint32(10).string(message.index);
      }
      return writer;
    },
  
    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): QueryGetStoredAuctionRequest {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryGetStoredAuctionRequest();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.index = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(object: any): QueryGetStoredAuctionRequest {
      return {
        index: isSet(object.index) ? String(object.index) : "",
      };
    },
  
    toJSON(message: QueryGetStoredAuctionRequest): unknown {
      const obj: any = {};
      message.index !== undefined && (obj.index = message.index);
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryGetStoredAuctionRequest>, I>>(
      object: I
    ): QueryGetStoredAuctionRequest {
      const message = createBaseQueryGetStoredAuctionRequest();
      message.index = object.index ?? "";
      return message;
    },
  };

  function createBaseQueryGetStoredAuctionResponse(): QueryGetStoredAuctionResponse {
    return { storedAuction: undefined };
  }
  
  export const QueryGetStoredAuctionResponse = {
    encode(
      message: QueryGetStoredAuctionResponse,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      if (message.storedAuction !== undefined) {
        StoredAuction.encode(message.storedAuction, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
  
    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): QueryGetStoredAuctionResponse {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryGetStoredAuctionResponse();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.storedAuction = StoredAuction.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(object: any): QueryGetStoredAuctionResponse {
      return {
        storedAuction: isSet(object.storedAuction)
          ? StoredAuction.fromJSON(object.storedAuction)
          : undefined,
      };
    },
  
    toJSON(message: QueryGetStoredAuctionResponse): unknown {
      const obj: any = {};
      message.storedAuction !== undefined &&
        (obj.storedAuction = message.storedAuction
          ? StoredAuction.toJSON(message.storedAuction)
          : undefined);
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryGetStoredAuctionResponse>, I>>(
      object: I
    ): QueryGetStoredAuctionResponse {
      const message = createBaseQueryGetStoredAuctionResponse();
      message.storedAuction =
        object.storedAuction !== undefined && object.storedAuction !== null
          ? StoredAuction.fromPartial(object.storedAuction)
          : undefined;
      return message;
    },
  };

  function createBaseQueryAllStoredAuctionRequest(): QueryAllStoredAuctionRequest {
    return { pagination: undefined };
  }
  
  export const QueryAllStoredAuctionRequest = {
    encode(
      message: QueryAllStoredAuctionRequest,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      if (message.pagination !== undefined) {
        PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
  
    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): QueryAllStoredAuctionRequest {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryAllStoredAuctionRequest();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pagination = PageRequest.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(object: any): QueryAllStoredAuctionRequest {
      return {
        pagination: isSet(object.pagination)
          ? PageRequest.fromJSON(object.pagination)
          : undefined,
      };
    },
  
    toJSON(message: QueryAllStoredAuctionRequest): unknown {
      const obj: any = {};
      message.pagination !== undefined &&
        (obj.pagination = message.pagination
          ? PageRequest.toJSON(message.pagination)
          : undefined);
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryAllStoredAuctionRequest>, I>>(
      object: I
    ): QueryAllStoredAuctionRequest {
      const message = createBaseQueryAllStoredAuctionRequest();
      message.pagination =
        object.pagination !== undefined && object.pagination !== null
          ? PageRequest.fromPartial(object.pagination)
          : undefined;
      return message;
    },
  };
  
  function createBaseQueryAllStoredAuctionResponse(): QueryAllStoredAuctionResponse {
    return { storedAuction: [], pagination: undefined };
  }
  
  export const QueryAllStoredAuctionResponse = {
    encode(
      message: QueryAllStoredAuctionResponse,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      for (const v of message.storedAuction) {
        StoredAuction.encode(v!, writer.uint32(10).fork()).ldelim();
      }
      if (message.pagination !== undefined) {
        PageResponse.encode(
          message.pagination,
          writer.uint32(18).fork()
        ).ldelim();
      }
      return writer;
    },
  
    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): QueryAllStoredAuctionResponse {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseQueryAllStoredAuctionResponse();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.storedAuction.push(StoredAuction.decode(reader, reader.uint32()));
            break;
          case 2:
            message.pagination = PageResponse.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },
  
    fromJSON(object: any): QueryAllStoredAuctionResponse {
      return {
        storedAuction: Array.isArray(object?.storedAuction)
          ? object.storedAuction.map((e: any) => StoredAuction.fromJSON(e))
          : [],
        pagination: isSet(object.pagination)
          ? PageResponse.fromJSON(object.pagination)
          : undefined,
      };
    },
  
    toJSON(message: QueryAllStoredAuctionResponse): unknown {
      const obj: any = {};
      if (message.storedAuction) {
        obj.storedAuction = message.storedAuction.map((e) =>
          e ? StoredAuction.toJSON(e) : undefined
        );
      } else {
        obj.storedAuction = [];
      }
      message.pagination !== undefined &&
        (obj.pagination = message.pagination
          ? PageResponse.toJSON(message.pagination)
          : undefined);
      return obj;
    },
  
    fromPartial<I extends Exact<DeepPartial<QueryAllStoredAuctionResponse>, I>>(
      object: I
    ): QueryAllStoredAuctionResponse {
      const message = createBaseQueryAllStoredAuctionResponse();
      message.storedAuction =
        object.storedAuction?.map((e) => StoredAuction.fromPartial(e)) || [];
      message.pagination =
        object.pagination !== undefined && object.pagination !== null
          ? PageResponse.fromPartial(object.pagination)
          : undefined;
      return message;
    },
  };