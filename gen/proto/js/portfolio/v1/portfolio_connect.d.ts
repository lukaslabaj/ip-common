// @generated by protoc-gen-connect-es v1.4.0
// @generated from file portfolio/v1/portfolio.proto (package portfolio.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetOperationsRequest, GetOperationsResponse, GetOperationSumRequest, GetOperationSumResponse, GetPortfolioRequest, GetPortfolioResponse, GetSummaryRequest, GetSummaryResponse, ImportTransactionsRequest, ImportTransactionsResponse } from "./portfolio_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service portfolio.v1.PortfolioService
 */
export declare const PortfolioService: {
  readonly typeName: "portfolio.v1.PortfolioService",
  readonly methods: {
    /**
     * @generated from rpc portfolio.v1.PortfolioService.GetSummary
     */
    readonly getSummary: {
      readonly name: "GetSummary",
      readonly I: typeof GetSummaryRequest,
      readonly O: typeof GetSummaryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc portfolio.v1.PortfolioService.ImportTransactions
     */
    readonly importTransactions: {
      readonly name: "ImportTransactions",
      readonly I: typeof ImportTransactionsRequest,
      readonly O: typeof ImportTransactionsResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc portfolio.v1.PortfolioService.GetPortfolio
     */
    readonly getPortfolio: {
      readonly name: "GetPortfolio",
      readonly I: typeof GetPortfolioRequest,
      readonly O: typeof GetPortfolioResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc portfolio.v1.PortfolioService.GetOperations
     */
    readonly getOperations: {
      readonly name: "GetOperations",
      readonly I: typeof GetOperationsRequest,
      readonly O: typeof GetOperationsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc portfolio.v1.PortfolioService.GetOperationSum
     */
    readonly getOperationSum: {
      readonly name: "GetOperationSum",
      readonly I: typeof GetOperationSumRequest,
      readonly O: typeof GetOperationSumResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
