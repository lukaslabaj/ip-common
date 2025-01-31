// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: market/v1/market.proto

package marketv1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MarketServiceClient is the client API for MarketService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MarketServiceClient interface {
	AddSecurity(ctx context.Context, in *AddSecurityRequest, opts ...grpc.CallOption) (*AddSecurityResponse, error)
	GetSectorDistribution(ctx context.Context, in *GetSectorDistributionRequest, opts ...grpc.CallOption) (*GetSectorDistributionResponse, error)
	ProcessAllSecurities(ctx context.Context, in *ProcessAllSecuritiesRequest, opts ...grpc.CallOption) (*ProcessAllSecuritiesResponse, error)
	GetSecurities(ctx context.Context, in *GetSecuritiesRequest, opts ...grpc.CallOption) (*GetSecuritiesResponse, error)
}

type marketServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMarketServiceClient(cc grpc.ClientConnInterface) MarketServiceClient {
	return &marketServiceClient{cc}
}

func (c *marketServiceClient) AddSecurity(ctx context.Context, in *AddSecurityRequest, opts ...grpc.CallOption) (*AddSecurityResponse, error) {
	out := new(AddSecurityResponse)
	err := c.cc.Invoke(ctx, "/market.v1.MarketService/AddSecurity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *marketServiceClient) GetSectorDistribution(ctx context.Context, in *GetSectorDistributionRequest, opts ...grpc.CallOption) (*GetSectorDistributionResponse, error) {
	out := new(GetSectorDistributionResponse)
	err := c.cc.Invoke(ctx, "/market.v1.MarketService/GetSectorDistribution", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *marketServiceClient) ProcessAllSecurities(ctx context.Context, in *ProcessAllSecuritiesRequest, opts ...grpc.CallOption) (*ProcessAllSecuritiesResponse, error) {
	out := new(ProcessAllSecuritiesResponse)
	err := c.cc.Invoke(ctx, "/market.v1.MarketService/ProcessAllSecurities", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *marketServiceClient) GetSecurities(ctx context.Context, in *GetSecuritiesRequest, opts ...grpc.CallOption) (*GetSecuritiesResponse, error) {
	out := new(GetSecuritiesResponse)
	err := c.cc.Invoke(ctx, "/market.v1.MarketService/GetSecurities", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MarketServiceServer is the server API for MarketService service.
// All implementations must embed UnimplementedMarketServiceServer
// for forward compatibility
type MarketServiceServer interface {
	AddSecurity(context.Context, *AddSecurityRequest) (*AddSecurityResponse, error)
	GetSectorDistribution(context.Context, *GetSectorDistributionRequest) (*GetSectorDistributionResponse, error)
	ProcessAllSecurities(context.Context, *ProcessAllSecuritiesRequest) (*ProcessAllSecuritiesResponse, error)
	GetSecurities(context.Context, *GetSecuritiesRequest) (*GetSecuritiesResponse, error)
	mustEmbedUnimplementedMarketServiceServer()
}

// UnimplementedMarketServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMarketServiceServer struct {
}

func (UnimplementedMarketServiceServer) AddSecurity(context.Context, *AddSecurityRequest) (*AddSecurityResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddSecurity not implemented")
}
func (UnimplementedMarketServiceServer) GetSectorDistribution(context.Context, *GetSectorDistributionRequest) (*GetSectorDistributionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSectorDistribution not implemented")
}
func (UnimplementedMarketServiceServer) ProcessAllSecurities(context.Context, *ProcessAllSecuritiesRequest) (*ProcessAllSecuritiesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ProcessAllSecurities not implemented")
}
func (UnimplementedMarketServiceServer) GetSecurities(context.Context, *GetSecuritiesRequest) (*GetSecuritiesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSecurities not implemented")
}
func (UnimplementedMarketServiceServer) mustEmbedUnimplementedMarketServiceServer() {}

// UnsafeMarketServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MarketServiceServer will
// result in compilation errors.
type UnsafeMarketServiceServer interface {
	mustEmbedUnimplementedMarketServiceServer()
}

func RegisterMarketServiceServer(s grpc.ServiceRegistrar, srv MarketServiceServer) {
	s.RegisterService(&MarketService_ServiceDesc, srv)
}

func _MarketService_AddSecurity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddSecurityRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MarketServiceServer).AddSecurity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/market.v1.MarketService/AddSecurity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MarketServiceServer).AddSecurity(ctx, req.(*AddSecurityRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MarketService_GetSectorDistribution_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSectorDistributionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MarketServiceServer).GetSectorDistribution(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/market.v1.MarketService/GetSectorDistribution",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MarketServiceServer).GetSectorDistribution(ctx, req.(*GetSectorDistributionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MarketService_ProcessAllSecurities_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProcessAllSecuritiesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MarketServiceServer).ProcessAllSecurities(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/market.v1.MarketService/ProcessAllSecurities",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MarketServiceServer).ProcessAllSecurities(ctx, req.(*ProcessAllSecuritiesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MarketService_GetSecurities_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSecuritiesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MarketServiceServer).GetSecurities(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/market.v1.MarketService/GetSecurities",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MarketServiceServer).GetSecurities(ctx, req.(*GetSecuritiesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MarketService_ServiceDesc is the grpc.ServiceDesc for MarketService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MarketService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "market.v1.MarketService",
	HandlerType: (*MarketServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddSecurity",
			Handler:    _MarketService_AddSecurity_Handler,
		},
		{
			MethodName: "GetSectorDistribution",
			Handler:    _MarketService_GetSectorDistribution_Handler,
		},
		{
			MethodName: "ProcessAllSecurities",
			Handler:    _MarketService_ProcessAllSecurities_Handler,
		},
		{
			MethodName: "GetSecurities",
			Handler:    _MarketService_GetSecurities_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "market/v1/market.proto",
}
