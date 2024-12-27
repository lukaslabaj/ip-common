// @generated by protoc-gen-es v1.7.2
// @generated from file auth/v1/account.proto (package auth.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum auth.v1.Provider
 */
export declare enum Provider {
  /**
   * @generated from enum value: INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: GOOGLE = 1;
   */
  GOOGLE = 1,
}

/**
 * @generated from message auth.v1.SignInOAuthRequest
 */
export declare class SignInOAuthRequest extends Message<SignInOAuthRequest> {
  /**
   * @generated from field: string code = 1;
   */
  code: string;

  /**
   * @generated from field: auth.v1.Provider provider = 2;
   */
  provider: Provider;

  constructor(data?: PartialMessage<SignInOAuthRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.SignInOAuthRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInOAuthRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInOAuthRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInOAuthRequest;

  static equals(a: SignInOAuthRequest | PlainMessage<SignInOAuthRequest> | undefined, b: SignInOAuthRequest | PlainMessage<SignInOAuthRequest> | undefined): boolean;
}

/**
 * @generated from message auth.v1.SignInOAuthResponse
 */
export declare class SignInOAuthResponse extends Message<SignInOAuthResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  constructor(data?: PartialMessage<SignInOAuthResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.SignInOAuthResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInOAuthResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInOAuthResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInOAuthResponse;

  static equals(a: SignInOAuthResponse | PlainMessage<SignInOAuthResponse> | undefined, b: SignInOAuthResponse | PlainMessage<SignInOAuthResponse> | undefined): boolean;
}

/**
 * @generated from message auth.v1.GetUserRequest
 */
export declare class GetUserRequest extends Message<GetUserRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  constructor(data?: PartialMessage<GetUserRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.GetUserRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserRequest;

  static equals(a: GetUserRequest | PlainMessage<GetUserRequest> | undefined, b: GetUserRequest | PlainMessage<GetUserRequest> | undefined): boolean;
}

/**
 * @generated from message auth.v1.GetUserResponse
 */
export declare class GetUserResponse extends Message<GetUserResponse> {
  /**
   * @generated from field: auth.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<GetUserResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.GetUserResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserResponse;

  static equals(a: GetUserResponse | PlainMessage<GetUserResponse> | undefined, b: GetUserResponse | PlainMessage<GetUserResponse> | undefined): boolean;
}

/**
 * @generated from message auth.v1.User
 */
export declare class User extends Message<User> {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: int64 create_time = 2;
   */
  createTime: bigint;

  /**
   * @generated from field: string email = 3;
   */
  email: string;

  /**
   * @generated from field: string first_name = 4;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 5;
   */
  lastName: string;

  constructor(data?: PartialMessage<User>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.User";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}

