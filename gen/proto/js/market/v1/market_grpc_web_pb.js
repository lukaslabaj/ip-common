/**
 * @fileoverview gRPC-Web generated client stub for market.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var shared_portfolio_item_pb = require('../../shared/portfolio_item_pb.js')
const proto = {};
proto.market = {};
proto.market.v1 = require('./market_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.market.v1.MarketServiceClient =
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
proto.market.v1.MarketServicePromiseClient =
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
 *   !proto.market.v1.AddSecurityRequest,
 *   !proto.market.v1.AddSecurityResponse>}
 */
const methodDescriptor_MarketService_AddSecurity = new grpc.web.MethodDescriptor(
  '/market.v1.MarketService/AddSecurity',
  grpc.web.MethodType.UNARY,
  proto.market.v1.AddSecurityRequest,
  proto.market.v1.AddSecurityResponse,
  /**
   * @param {!proto.market.v1.AddSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.market.v1.AddSecurityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.market.v1.AddSecurityRequest,
 *   !proto.market.v1.AddSecurityResponse>}
 */
const methodInfo_MarketService_AddSecurity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.market.v1.AddSecurityResponse,
  /**
   * @param {!proto.market.v1.AddSecurityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.market.v1.AddSecurityResponse.deserializeBinary
);


/**
 * @param {!proto.market.v1.AddSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.market.v1.AddSecurityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.market.v1.AddSecurityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.market.v1.MarketServiceClient.prototype.addSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/market.v1.MarketService/AddSecurity',
      request,
      metadata || {},
      methodDescriptor_MarketService_AddSecurity,
      callback);
};


/**
 * @param {!proto.market.v1.AddSecurityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.market.v1.AddSecurityResponse>}
 *     Promise that resolves to the response
 */
proto.market.v1.MarketServicePromiseClient.prototype.addSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/market.v1.MarketService/AddSecurity',
      request,
      metadata || {},
      methodDescriptor_MarketService_AddSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.market.v1.GetSectorDistributionRequest,
 *   !proto.market.v1.GetSectorDistributionResponse>}
 */
const methodDescriptor_MarketService_GetSectorDistribution = new grpc.web.MethodDescriptor(
  '/market.v1.MarketService/GetSectorDistribution',
  grpc.web.MethodType.UNARY,
  proto.market.v1.GetSectorDistributionRequest,
  proto.market.v1.GetSectorDistributionResponse,
  /**
   * @param {!proto.market.v1.GetSectorDistributionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.market.v1.GetSectorDistributionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.market.v1.GetSectorDistributionRequest,
 *   !proto.market.v1.GetSectorDistributionResponse>}
 */
const methodInfo_MarketService_GetSectorDistribution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.market.v1.GetSectorDistributionResponse,
  /**
   * @param {!proto.market.v1.GetSectorDistributionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.market.v1.GetSectorDistributionResponse.deserializeBinary
);


/**
 * @param {!proto.market.v1.GetSectorDistributionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.market.v1.GetSectorDistributionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.market.v1.GetSectorDistributionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.market.v1.MarketServiceClient.prototype.getSectorDistribution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/market.v1.MarketService/GetSectorDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketService_GetSectorDistribution,
      callback);
};


/**
 * @param {!proto.market.v1.GetSectorDistributionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.market.v1.GetSectorDistributionResponse>}
 *     Promise that resolves to the response
 */
proto.market.v1.MarketServicePromiseClient.prototype.getSectorDistribution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/market.v1.MarketService/GetSectorDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketService_GetSectorDistribution);
};


module.exports = proto.market.v1;

