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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.pb = require('./portfolio_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.PortfolioServiceClient =
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
proto.pb.PortfolioServicePromiseClient =
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
 *   !proto.pb.GetSummaryRequest,
 *   !proto.pb.GetSummaryResponse>}
 */
const methodDescriptor_PortfolioService_GetSummary = new grpc.web.MethodDescriptor(
  '/pb.PortfolioService/GetSummary',
  grpc.web.MethodType.UNARY,
  proto.pb.GetSummaryRequest,
  proto.pb.GetSummaryResponse,
  /**
   * @param {!proto.pb.GetSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.GetSummaryRequest,
 *   !proto.pb.GetSummaryResponse>}
 */
const methodInfo_PortfolioService_GetSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetSummaryResponse,
  /**
   * @param {!proto.pb.GetSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.pb.GetSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.PortfolioServiceClient.prototype.getSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PortfolioService/GetSummary',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetSummary,
      callback);
};


/**
 * @param {!proto.pb.GetSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.pb.PortfolioServicePromiseClient.prototype.getSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PortfolioService/GetSummary',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.ImportTransactionsRequest,
 *   !proto.pb.ImportTransactionsResponse>}
 */
const methodDescriptor_PortfolioService_ImportTransactions = new grpc.web.MethodDescriptor(
  '/pb.PortfolioService/ImportTransactions',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pb.ImportTransactionsRequest,
  proto.pb.ImportTransactionsResponse,
  /**
   * @param {!proto.pb.ImportTransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.ImportTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.ImportTransactionsRequest,
 *   !proto.pb.ImportTransactionsResponse>}
 */
const methodInfo_PortfolioService_ImportTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.ImportTransactionsResponse,
  /**
   * @param {!proto.pb.ImportTransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.ImportTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.pb.ImportTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ImportTransactionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.PortfolioServiceClient.prototype.importTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.PortfolioService/ImportTransactions',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_ImportTransactions);
};


/**
 * @param {!proto.pb.ImportTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ImportTransactionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.PortfolioServicePromiseClient.prototype.importTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.PortfolioService/ImportTransactions',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_ImportTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.GetPortfolioRequest,
 *   !proto.pb.GetPortfolioResponse>}
 */
const methodDescriptor_PortfolioService_GetPortfolio = new grpc.web.MethodDescriptor(
  '/pb.PortfolioService/GetPortfolio',
  grpc.web.MethodType.UNARY,
  proto.pb.GetPortfolioRequest,
  proto.pb.GetPortfolioResponse,
  /**
   * @param {!proto.pb.GetPortfolioRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetPortfolioResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.GetPortfolioRequest,
 *   !proto.pb.GetPortfolioResponse>}
 */
const methodInfo_PortfolioService_GetPortfolio = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetPortfolioResponse,
  /**
   * @param {!proto.pb.GetPortfolioRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetPortfolioResponse.deserializeBinary
);


/**
 * @param {!proto.pb.GetPortfolioRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetPortfolioResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetPortfolioResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.PortfolioServiceClient.prototype.getPortfolio =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PortfolioService/GetPortfolio',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetPortfolio,
      callback);
};


/**
 * @param {!proto.pb.GetPortfolioRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetPortfolioResponse>}
 *     Promise that resolves to the response
 */
proto.pb.PortfolioServicePromiseClient.prototype.getPortfolio =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PortfolioService/GetPortfolio',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetPortfolio);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.GetOperationsRequest,
 *   !proto.pb.GetOperationsResponse>}
 */
const methodDescriptor_PortfolioService_GetOperations = new grpc.web.MethodDescriptor(
  '/pb.PortfolioService/GetOperations',
  grpc.web.MethodType.UNARY,
  proto.pb.GetOperationsRequest,
  proto.pb.GetOperationsResponse,
  /**
   * @param {!proto.pb.GetOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetOperationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.GetOperationsRequest,
 *   !proto.pb.GetOperationsResponse>}
 */
const methodInfo_PortfolioService_GetOperations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetOperationsResponse,
  /**
   * @param {!proto.pb.GetOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.pb.GetOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.PortfolioServiceClient.prototype.getOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PortfolioService/GetOperations',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperations,
      callback);
};


/**
 * @param {!proto.pb.GetOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.pb.PortfolioServicePromiseClient.prototype.getOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PortfolioService/GetOperations',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.GetOperationSumRequest,
 *   !proto.pb.GetOperationSumResponse>}
 */
const methodDescriptor_PortfolioService_GetOperationSum = new grpc.web.MethodDescriptor(
  '/pb.PortfolioService/GetOperationSum',
  grpc.web.MethodType.UNARY,
  proto.pb.GetOperationSumRequest,
  proto.pb.GetOperationSumResponse,
  /**
   * @param {!proto.pb.GetOperationSumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetOperationSumResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.GetOperationSumRequest,
 *   !proto.pb.GetOperationSumResponse>}
 */
const methodInfo_PortfolioService_GetOperationSum = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetOperationSumResponse,
  /**
   * @param {!proto.pb.GetOperationSumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetOperationSumResponse.deserializeBinary
);


/**
 * @param {!proto.pb.GetOperationSumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetOperationSumResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetOperationSumResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.PortfolioServiceClient.prototype.getOperationSum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PortfolioService/GetOperationSum',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperationSum,
      callback);
};


/**
 * @param {!proto.pb.GetOperationSumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetOperationSumResponse>}
 *     Promise that resolves to the response
 */
proto.pb.PortfolioServicePromiseClient.prototype.getOperationSum =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PortfolioService/GetOperationSum',
      request,
      metadata || {},
      methodDescriptor_PortfolioService_GetOperationSum);
};


module.exports = proto.pb;

