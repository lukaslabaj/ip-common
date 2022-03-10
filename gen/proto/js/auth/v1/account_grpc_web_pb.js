/**
 * @fileoverview gRPC-Web generated client stub for auth.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.auth = {};
proto.auth.v1 = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.v1.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.v1.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.v1.SignInOAuthRequest,
 *   !proto.auth.v1.SignInOAuthResponse>}
 */
const methodDescriptor_AuthService_SignInOAuth = new grpc.web.MethodDescriptor(
  '/auth.v1.AuthService/SignInOAuth',
  grpc.web.MethodType.UNARY,
  proto.auth.v1.SignInOAuthRequest,
  proto.auth.v1.SignInOAuthResponse,
  /**
   * @param {!proto.auth.v1.SignInOAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.v1.SignInOAuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.v1.SignInOAuthRequest,
 *   !proto.auth.v1.SignInOAuthResponse>}
 */
const methodInfo_AuthService_SignInOAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.v1.SignInOAuthResponse,
  /**
   * @param {!proto.auth.v1.SignInOAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.v1.SignInOAuthResponse.deserializeBinary
);


/**
 * @param {!proto.auth.v1.SignInOAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.v1.SignInOAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.v1.SignInOAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.v1.AuthServiceClient.prototype.signInOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.v1.AuthService/SignInOAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_SignInOAuth,
      callback);
};


/**
 * @param {!proto.auth.v1.SignInOAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.v1.SignInOAuthResponse>}
 *     Promise that resolves to the response
 */
proto.auth.v1.AuthServicePromiseClient.prototype.signInOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.v1.AuthService/SignInOAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_SignInOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.v1.GetUserRequest,
 *   !proto.auth.v1.GetUserResponse>}
 */
const methodDescriptor_AuthService_GetUser = new grpc.web.MethodDescriptor(
  '/auth.v1.AuthService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.auth.v1.GetUserRequest,
  proto.auth.v1.GetUserResponse,
  /**
   * @param {!proto.auth.v1.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.v1.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.v1.GetUserRequest,
 *   !proto.auth.v1.GetUserResponse>}
 */
const methodInfo_AuthService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.v1.GetUserResponse,
  /**
   * @param {!proto.auth.v1.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.v1.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.auth.v1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.v1.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.v1.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.v1.AuthServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.v1.AuthService/GetUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetUser,
      callback);
};


/**
 * @param {!proto.auth.v1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.v1.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.auth.v1.AuthServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.v1.AuthService/GetUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetUser);
};


module.exports = proto.auth.v1;

