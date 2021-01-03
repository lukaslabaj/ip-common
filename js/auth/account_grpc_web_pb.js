/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pb = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.AuthServiceClient =
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
proto.pb.AuthServicePromiseClient =
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
 *   !proto.pb.SignInOAuthRequest,
 *   !proto.pb.SignInOAuthResponse>}
 */
const methodDescriptor_AuthService_SignInOAuth = new grpc.web.MethodDescriptor(
  '/pb.AuthService/SignInOAuth',
  grpc.web.MethodType.UNARY,
  proto.pb.SignInOAuthRequest,
  proto.pb.SignInOAuthResponse,
  /**
   * @param {!proto.pb.SignInOAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.SignInOAuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.SignInOAuthRequest,
 *   !proto.pb.SignInOAuthResponse>}
 */
const methodInfo_AuthService_SignInOAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.SignInOAuthResponse,
  /**
   * @param {!proto.pb.SignInOAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.SignInOAuthResponse.deserializeBinary
);


/**
 * @param {!proto.pb.SignInOAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.SignInOAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.SignInOAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.AuthServiceClient.prototype.signInOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.AuthService/SignInOAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_SignInOAuth,
      callback);
};


/**
 * @param {!proto.pb.SignInOAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.SignInOAuthResponse>}
 *     Promise that resolves to the response
 */
proto.pb.AuthServicePromiseClient.prototype.signInOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.AuthService/SignInOAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_SignInOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.GetUserRequest,
 *   !proto.pb.GetUserResponse>}
 */
const methodDescriptor_AuthService_GetUser = new grpc.web.MethodDescriptor(
  '/pb.AuthService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.pb.GetUserRequest,
  proto.pb.GetUserResponse,
  /**
   * @param {!proto.pb.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.GetUserRequest,
 *   !proto.pb.GetUserResponse>}
 */
const methodInfo_AuthService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetUserResponse,
  /**
   * @param {!proto.pb.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.pb.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.AuthServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.AuthService/GetUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetUser,
      callback);
};


/**
 * @param {!proto.pb.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.pb.AuthServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.AuthService/GetUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetUser);
};


module.exports = proto.pb;

