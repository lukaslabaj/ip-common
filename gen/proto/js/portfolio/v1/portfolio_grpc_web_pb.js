/**
 * @fileoverview gRPC-Web generated client stub for portfolio.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var shared_filter_pb = require('../../shared/filter_pb.js')

var shared_portfolio_item_pb = require('../../shared/portfolio_item_pb.js')

var shared_time_precision_pb = require('../../shared/time_precision_pb.js')
const proto = {};
proto.portfolio = {};
proto.portfolio.v1 = require('./portfolio_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.portfolio.v1.PortfolioServiceClient =
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
proto.portfolio.v1.PortfolioServicePromiseClient =
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
 *   !proto.portfolio.v1.GetSummaryRequest,
 *   !proto.portfolio.v1.GetSummaryResponse>}
 */
const methodDescriptor_PortfolioService_GetSummary = new grpc.web.MethodDescriptor(
  '/portfolio.v1.PortfolioService/GetSummary',
  grpc.web.MethodType.UNARY,
  proto.portfolio.v1.GetSummaryRequest,
  proto.portfolio.v1.GetSummaryResponse,
  /**
   * @param {!proto.portfolio.v1.GetSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.portfolio.v1.GetSummaryRequest,
 *   !proto.portfolio.v1.GetSummaryResponse>}
 */
const methodInfo_PortfolioService_GetSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.portfolio.v1.GetSummaryResponse,
  /**
   * @param {!proto.portfolio.v1.GetSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.portfolio.v1.GetSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.portfolio.v1.GetSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.portfolio.v1.GetSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.portfolio.v1.PortfolioServiceClient.prototype.getSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetSummary',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetSummary,
      callback);
};


/**
 * @param {!proto.portfolio.v1.GetSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.portfolio.v1.GetSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.portfolio.v1.PortfolioServicePromiseClient.prototype.getSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetSummary',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.portfolio.v1.ImportTransactionsRequest,
 *   !proto.portfolio.v1.ImportTransactionsResponse>}
 */
const methodDescriptor_PortfolioService_ImportTransactions = new grpc.web.MethodDescriptor(
  '/portfolio.v1.PortfolioService/ImportTransactions',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.portfolio.v1.ImportTransactionsRequest,
  proto.portfolio.v1.ImportTransactionsResponse,
  /**
   * @param {!proto.portfolio.v1.ImportTransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.ImportTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.portfolio.v1.ImportTransactionsRequest,
 *   !proto.portfolio.v1.ImportTransactionsResponse>}
 */
const methodInfo_PortfolioService_ImportTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.portfolio.v1.ImportTransactionsResponse,
  /**
   * @param {!proto.portfolio.v1.ImportTransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.ImportTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.portfolio.v1.ImportTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.portfolio.v1.ImportTransactionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.portfolio.v1.PortfolioServiceClient.prototype.importTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/portfolio.v1.PortfolioService/ImportTransactions',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_ImportTransactions);
};


/**
 * @param {!proto.portfolio.v1.ImportTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.portfolio.v1.ImportTransactionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.portfolio.v1.PortfolioServicePromiseClient.prototype.importTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/portfolio.v1.PortfolioService/ImportTransactions',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_ImportTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.portfolio.v1.GetPortfolioRequest,
 *   !proto.portfolio.v1.GetPortfolioResponse>}
 */
const methodDescriptor_PortfolioService_GetPortfolio = new grpc.web.MethodDescriptor(
  '/portfolio.v1.PortfolioService/GetPortfolio',
  grpc.web.MethodType.UNARY,
  proto.portfolio.v1.GetPortfolioRequest,
  proto.portfolio.v1.GetPortfolioResponse,
  /**
   * @param {!proto.portfolio.v1.GetPortfolioRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetPortfolioResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.portfolio.v1.GetPortfolioRequest,
 *   !proto.portfolio.v1.GetPortfolioResponse>}
 */
const methodInfo_PortfolioService_GetPortfolio = new grpc.web.AbstractClientBase.MethodInfo(
  proto.portfolio.v1.GetPortfolioResponse,
  /**
   * @param {!proto.portfolio.v1.GetPortfolioRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetPortfolioResponse.deserializeBinary
);


/**
 * @param {!proto.portfolio.v1.GetPortfolioRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.portfolio.v1.GetPortfolioResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.portfolio.v1.GetPortfolioResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.portfolio.v1.PortfolioServiceClient.prototype.getPortfolio =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetPortfolio',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetPortfolio,
      callback);
};


/**
 * @param {!proto.portfolio.v1.GetPortfolioRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.portfolio.v1.GetPortfolioResponse>}
 *     Promise that resolves to the response
 */
proto.portfolio.v1.PortfolioServicePromiseClient.prototype.getPortfolio =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetPortfolio',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetPortfolio);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.portfolio.v1.GetOperationsRequest,
 *   !proto.portfolio.v1.GetOperationsResponse>}
 */
const methodDescriptor_PortfolioService_GetOperations = new grpc.web.MethodDescriptor(
  '/portfolio.v1.PortfolioService/GetOperations',
  grpc.web.MethodType.UNARY,
  proto.portfolio.v1.GetOperationsRequest,
  proto.portfolio.v1.GetOperationsResponse,
  /**
   * @param {!proto.portfolio.v1.GetOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetOperationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.portfolio.v1.GetOperationsRequest,
 *   !proto.portfolio.v1.GetOperationsResponse>}
 */
const methodInfo_PortfolioService_GetOperations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.portfolio.v1.GetOperationsResponse,
  /**
   * @param {!proto.portfolio.v1.GetOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.portfolio.v1.GetOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.portfolio.v1.GetOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.portfolio.v1.GetOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.portfolio.v1.PortfolioServiceClient.prototype.getOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetOperations',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperations,
      callback);
};


/**
 * @param {!proto.portfolio.v1.GetOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.portfolio.v1.GetOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.portfolio.v1.PortfolioServicePromiseClient.prototype.getOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetOperations',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.portfolio.v1.GetOperationSumRequest,
 *   !proto.portfolio.v1.GetOperationSumResponse>}
 */
const methodDescriptor_PortfolioService_GetOperationSum = new grpc.web.MethodDescriptor(
  '/portfolio.v1.PortfolioService/GetOperationSum',
  grpc.web.MethodType.UNARY,
  proto.portfolio.v1.GetOperationSumRequest,
  proto.portfolio.v1.GetOperationSumResponse,
  /**
   * @param {!proto.portfolio.v1.GetOperationSumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetOperationSumResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.portfolio.v1.GetOperationSumRequest,
 *   !proto.portfolio.v1.GetOperationSumResponse>}
 */
const methodInfo_PortfolioService_GetOperationSum = new grpc.web.AbstractClientBase.MethodInfo(
  proto.portfolio.v1.GetOperationSumResponse,
  /**
   * @param {!proto.portfolio.v1.GetOperationSumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.portfolio.v1.GetOperationSumResponse.deserializeBinary
);


/**
 * @param {!proto.portfolio.v1.GetOperationSumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.portfolio.v1.GetOperationSumResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.portfolio.v1.GetOperationSumResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.portfolio.v1.PortfolioServiceClient.prototype.getOperationSum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetOperationSum',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperationSum,
      callback);
};


/**
 * @param {!proto.portfolio.v1.GetOperationSumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.portfolio.v1.GetOperationSumResponse>}
 *     Promise that resolves to the response
 */
proto.portfolio.v1.PortfolioServicePromiseClient.prototype.getOperationSum =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/portfolio.v1.PortfolioService/GetOperationSum',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperationSum);
};


module.exports = proto.portfolio.v1;

