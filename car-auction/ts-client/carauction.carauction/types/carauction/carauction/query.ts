/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StoredAuction } from "./stored_auction";
import { StoredBid } from "./stored_bid";
import { SystemInfo } from "./system_info";

export const protobufPackage = "carauction.carauction";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSystemInfoRequest {
}

export interface QueryGetSystemInfoResponse {
  SystemInfo: SystemInfo | undefined;
}

export interface QueryGetStoredAuctionRequest {
  index: string;
}

export interface QueryGetStoredAuctionResponse {
  storedAuction: StoredAuction | undefined;
}

export interface QueryAllStoredAuctionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredAuctionResponse {
  storedAuction: StoredAuction[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStoredBidRequest {
  index: string;
}

export interface QueryGetStoredBidResponse {
  storedBid: StoredBid | undefined;
}

export interface QueryAllStoredBidRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredBidResponse {
  storedBid: StoredBid[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfoRequest(): QueryGetSystemInfoRequest {
  return {};
}

export const QueryGetSystemInfoRequest = {
  encode(_: QueryGetSystemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfoRequest {
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

  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoRequest>, I>>(_: I): QueryGetSystemInfoRequest {
    const message = createBaseQueryGetSystemInfoRequest();
    return message;
  },
};

function createBaseQueryGetSystemInfoResponse(): QueryGetSystemInfoResponse {
  return { SystemInfo: undefined };
}

export const QueryGetSystemInfoResponse = {
  encode(message: QueryGetSystemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SystemInfo !== undefined) {
      SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfoResponse {
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
    return { SystemInfo: isSet(object.SystemInfo) ? SystemInfo.fromJSON(object.SystemInfo) : undefined };
  },

  toJSON(message: QueryGetSystemInfoResponse): unknown {
    const obj: any = {};
    message.SystemInfo !== undefined
      && (obj.SystemInfo = message.SystemInfo ? SystemInfo.toJSON(message.SystemInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoResponse>, I>>(object: I): QueryGetSystemInfoResponse {
    const message = createBaseQueryGetSystemInfoResponse();
    message.SystemInfo = (object.SystemInfo !== undefined && object.SystemInfo !== null)
      ? SystemInfo.fromPartial(object.SystemInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredAuctionRequest(): QueryGetStoredAuctionRequest {
  return { index: "" };
}

export const QueryGetStoredAuctionRequest = {
  encode(message: QueryGetStoredAuctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredAuctionRequest {
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
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetStoredAuctionRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredAuctionRequest>, I>>(object: I): QueryGetStoredAuctionRequest {
    const message = createBaseQueryGetStoredAuctionRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetStoredAuctionResponse(): QueryGetStoredAuctionResponse {
  return { storedAuction: undefined };
}

export const QueryGetStoredAuctionResponse = {
  encode(message: QueryGetStoredAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedAuction !== undefined) {
      StoredAuction.encode(message.storedAuction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredAuctionResponse {
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
    return { storedAuction: isSet(object.storedAuction) ? StoredAuction.fromJSON(object.storedAuction) : undefined };
  },

  toJSON(message: QueryGetStoredAuctionResponse): unknown {
    const obj: any = {};
    message.storedAuction !== undefined
      && (obj.storedAuction = message.storedAuction ? StoredAuction.toJSON(message.storedAuction) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredAuctionResponse>, I>>(
    object: I,
  ): QueryGetStoredAuctionResponse {
    const message = createBaseQueryGetStoredAuctionResponse();
    message.storedAuction = (object.storedAuction !== undefined && object.storedAuction !== null)
      ? StoredAuction.fromPartial(object.storedAuction)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredAuctionRequest(): QueryAllStoredAuctionRequest {
  return { pagination: undefined };
}

export const QueryAllStoredAuctionRequest = {
  encode(message: QueryAllStoredAuctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredAuctionRequest {
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
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredAuctionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredAuctionRequest>, I>>(object: I): QueryAllStoredAuctionRequest {
    const message = createBaseQueryAllStoredAuctionRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredAuctionResponse(): QueryAllStoredAuctionResponse {
  return { storedAuction: [], pagination: undefined };
}

export const QueryAllStoredAuctionResponse = {
  encode(message: QueryAllStoredAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedAuction) {
      StoredAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredAuctionResponse {
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
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredAuctionResponse): unknown {
    const obj: any = {};
    if (message.storedAuction) {
      obj.storedAuction = message.storedAuction.map((e) => e ? StoredAuction.toJSON(e) : undefined);
    } else {
      obj.storedAuction = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredAuctionResponse>, I>>(
    object: I,
  ): QueryAllStoredAuctionResponse {
    const message = createBaseQueryAllStoredAuctionResponse();
    message.storedAuction = object.storedAuction?.map((e) => StoredAuction.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredBidRequest(): QueryGetStoredBidRequest {
  return { index: "" };
}

export const QueryGetStoredBidRequest = {
  encode(message: QueryGetStoredBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredBidRequest();
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

  fromJSON(object: any): QueryGetStoredBidRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetStoredBidRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredBidRequest>, I>>(object: I): QueryGetStoredBidRequest {
    const message = createBaseQueryGetStoredBidRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetStoredBidResponse(): QueryGetStoredBidResponse {
  return { storedBid: undefined };
}

export const QueryGetStoredBidResponse = {
  encode(message: QueryGetStoredBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedBid !== undefined) {
      StoredBid.encode(message.storedBid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedBid = StoredBid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredBidResponse {
    return { storedBid: isSet(object.storedBid) ? StoredBid.fromJSON(object.storedBid) : undefined };
  },

  toJSON(message: QueryGetStoredBidResponse): unknown {
    const obj: any = {};
    message.storedBid !== undefined
      && (obj.storedBid = message.storedBid ? StoredBid.toJSON(message.storedBid) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredBidResponse>, I>>(object: I): QueryGetStoredBidResponse {
    const message = createBaseQueryGetStoredBidResponse();
    message.storedBid = (object.storedBid !== undefined && object.storedBid !== null)
      ? StoredBid.fromPartial(object.storedBid)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredBidRequest(): QueryAllStoredBidRequest {
  return { pagination: undefined };
}

export const QueryAllStoredBidRequest = {
  encode(message: QueryAllStoredBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredBidRequest();
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

  fromJSON(object: any): QueryAllStoredBidRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredBidRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredBidRequest>, I>>(object: I): QueryAllStoredBidRequest {
    const message = createBaseQueryAllStoredBidRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredBidResponse(): QueryAllStoredBidResponse {
  return { storedBid: [], pagination: undefined };
}

export const QueryAllStoredBidResponse = {
  encode(message: QueryAllStoredBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedBid) {
      StoredBid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedBid.push(StoredBid.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStoredBidResponse {
    return {
      storedBid: Array.isArray(object?.storedBid) ? object.storedBid.map((e: any) => StoredBid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredBidResponse): unknown {
    const obj: any = {};
    if (message.storedBid) {
      obj.storedBid = message.storedBid.map((e) => e ? StoredBid.toJSON(e) : undefined);
    } else {
      obj.storedBid = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredBidResponse>, I>>(object: I): QueryAllStoredBidResponse {
    const message = createBaseQueryAllStoredBidResponse();
    message.storedBid = object.storedBid?.map((e) => StoredBid.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SystemInfo by index. */
  SystemInfo(request: QueryGetSystemInfoRequest): Promise<QueryGetSystemInfoResponse>;
  /** Queries a list of StoredAuction items. */
  StoredAuction(request: QueryGetStoredAuctionRequest): Promise<QueryGetStoredAuctionResponse>;
  StoredAuctionAll(request: QueryAllStoredAuctionRequest): Promise<QueryAllStoredAuctionResponse>;
  /** Queries a list of StoredBid items. */
  StoredBid(request: QueryGetStoredBidRequest): Promise<QueryGetStoredBidResponse>;
  StoredBidAll(request: QueryAllStoredBidRequest): Promise<QueryAllStoredBidResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SystemInfo = this.SystemInfo.bind(this);
    this.StoredAuction = this.StoredAuction.bind(this);
    this.StoredAuctionAll = this.StoredAuctionAll.bind(this);
    this.StoredBid = this.StoredBid.bind(this);
    this.StoredBidAll = this.StoredBidAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  SystemInfo(request: QueryGetSystemInfoRequest): Promise<QueryGetSystemInfoResponse> {
    const data = QueryGetSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Query", "SystemInfo", data);
    return promise.then((data) => QueryGetSystemInfoResponse.decode(new _m0.Reader(data)));
  }

  StoredAuction(request: QueryGetStoredAuctionRequest): Promise<QueryGetStoredAuctionResponse> {
    const data = QueryGetStoredAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Query", "StoredAuction", data);
    return promise.then((data) => QueryGetStoredAuctionResponse.decode(new _m0.Reader(data)));
  }

  StoredAuctionAll(request: QueryAllStoredAuctionRequest): Promise<QueryAllStoredAuctionResponse> {
    const data = QueryAllStoredAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Query", "StoredAuctionAll", data);
    return promise.then((data) => QueryAllStoredAuctionResponse.decode(new _m0.Reader(data)));
  }

  StoredBid(request: QueryGetStoredBidRequest): Promise<QueryGetStoredBidResponse> {
    const data = QueryGetStoredBidRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Query", "StoredBid", data);
    return promise.then((data) => QueryGetStoredBidResponse.decode(new _m0.Reader(data)));
  }

  StoredBidAll(request: QueryAllStoredBidRequest): Promise<QueryAllStoredBidResponse> {
    const data = QueryAllStoredBidRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.carauction.Query", "StoredBidAll", data);
    return promise.then((data) => QueryAllStoredBidResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
