// @generated by protoc-gen-connect-es v1.4.0
// @generated from file market/v1/market.proto (package market.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddSecurityRequest, AddSecurityResponse, GetSectorDistributionRequest, GetSectorDistributionResponse, GetSecuritiesRequest, GetSecuritiesResponse, ProcessAllSecuritiesRequest, ProcessAllSecuritiesResponse } from "./market_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service market.v1.MarketService
 */
export const MarketService = {
  typeName: "market.v1.MarketService",
  methods: {
    /**
     * @generated from rpc market.v1.MarketService.AddSecurity
     */
    addSecurity: {
      name: "AddSecurity",
      I: AddSecurityRequest,
      O: AddSecurityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc market.v1.MarketService.GetSectorDistribution
     */
    getSectorDistribution: {
      name: "GetSectorDistribution",
      I: GetSectorDistributionRequest,
      O: GetSectorDistributionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc market.v1.MarketService.ProcessAllSecurities
     */
    processAllSecurities: {
      name: "ProcessAllSecurities",
      I: ProcessAllSecuritiesRequest,
      O: ProcessAllSecuritiesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc market.v1.MarketService.GetSecurities
     */
    getSecurities: {
      name: "GetSecurities",
      I: GetSecuritiesRequest,
      O: GetSecuritiesResponse,
      kind: MethodKind.Unary,
    },
  }
};

