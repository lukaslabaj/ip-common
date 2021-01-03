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
proto.pb = require('./market_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.MarketServiceClient =
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
proto.pb.MarketServicePromiseClient =
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
 *   !proto.pb.AddSecurityRequest,
 *   !proto.pb.AddSecurityResponse>}
 */
const methodDescriptor_MarketService_AddSecurity = new grpc.web.MethodDescriptor(
  '/pb.MarketService/AddSecurity',
  grpc.web.MethodType.UNARY,
  proto.pb.AddSecurityRequest,
  proto.pb.AddSecurityResponse,
  /**
   * @param {!proto.pb.AddSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.AddSecurityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.AddSecurityRequest,
 *   !proto.pb.AddSecurityResponse>}
 */
const methodInfo_MarketService_AddSecurity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.AddSecurityResponse,
  /**
   * @param {!proto.pb.AddSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.AddSecurityResponse.deserializeBinary
);


/**
 * @param {!proto.pb.AddSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AddSecurityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AddSecurityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.MarketServiceClient.prototype.addSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.MarketService/AddSecurity',
      request,
      metadata || {},
      methodDescriptor_MarketService_AddSecurity,
      callback);
};


/**
 * @param {!proto.pb.AddSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AddSecurityResponse>}
 *     Promise that resolves to the response
 */
proto.pb.MarketServicePromiseClient.prototype.addSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.MarketService/AddSecurity',
      request,
      metadata || {},
      methodDescriptor_MarketService_AddSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.SectorDistributionRequest,
 *   !proto.pb.SectorDistributionResponse>}
 */
const methodDescriptor_MarketService_GetSectorDistribution = new grpc.web.MethodDescriptor(
  '/pb.MarketService/GetSectorDistribution',
  grpc.web.MethodType.UNARY,
  proto.pb.SectorDistributionRequest,
  proto.pb.SectorDistributionResponse,
  /**
   * @param {!proto.pb.SectorDistributionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.SectorDistributionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.SectorDistributionRequest,
 *   !proto.pb.SectorDistributionResponse>}
 */
const methodInfo_MarketService_GetSectorDistribution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.SectorDistributionResponse,
  /**
   * @param {!proto.pb.SectorDistributionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.SectorDistributionResponse.deserializeBinary
);


/**
 * @param {!proto.pb.SectorDistributionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.SectorDistributionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.SectorDistributionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.MarketServiceClient.prototype.getSectorDistribution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.MarketService/GetSectorDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketService_GetSectorDistribution,
      callback);
};


/**
 * @param {!proto.pb.SectorDistributionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.SectorDistributionResponse>}
 *     Promise that resolves to the response
 */
proto.pb.MarketServicePromiseClient.prototype.getSectorDistribution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.MarketService/GetSectorDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketService_GetSectorDistribution);
};


module.exports = proto.pb;

