// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: portfolio/v1/portfolio.proto

package portfoliov1

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

// PortfolioServiceClient is the client API for PortfolioService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PortfolioServiceClient interface {
	GetSummary(ctx context.Context, in *GetSummaryRequest, opts ...grpc.CallOption) (*GetSummaryResponse, error)
	ImportTransactions(ctx context.Context, in *ImportTransactionsRequest, opts ...grpc.CallOption) (PortfolioService_ImportTransactionsClient, error)
	GetPortfolio(ctx context.Context, in *GetPortfolioRequest, opts ...grpc.CallOption) (*GetPortfolioResponse, error)
	GetOperations(ctx context.Context, in *GetOperationsRequest, opts ...grpc.CallOption) (*GetOperationsResponse, error)
	GetOperationSum(ctx context.Context, in *GetOperationSumRequest, opts ...grpc.CallOption) (*GetOperationSumResponse, error)
}

type portfolioServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPortfolioServiceClient(cc grpc.ClientConnInterface) PortfolioServiceClient {
	return &portfolioServiceClient{cc}
}

func (c *portfolioServiceClient) GetSummary(ctx context.Context, in *GetSummaryRequest, opts ...grpc.CallOption) (*GetSummaryResponse, error) {
	out := new(GetSummaryResponse)
	err := c.cc.Invoke(ctx, "/portfolio.v1.PortfolioService/GetSummary", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *portfolioServiceClient) ImportTransactions(ctx context.Context, in *ImportTransactionsRequest, opts ...grpc.CallOption) (PortfolioService_ImportTransactionsClient, error) {
	stream, err := c.cc.NewStream(ctx, &PortfolioService_ServiceDesc.Streams[0], "/portfolio.v1.PortfolioService/ImportTransactions", opts...)
	if err != nil {
		return nil, err
	}
	x := &portfolioServiceImportTransactionsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PortfolioService_ImportTransactionsClient interface {
	Recv() (*ImportTransactionsResponse, error)
	grpc.ClientStream
}

type portfolioServiceImportTransactionsClient struct {
	grpc.ClientStream
}

func (x *portfolioServiceImportTransactionsClient) Recv() (*ImportTransactionsResponse, error) {
	m := new(ImportTransactionsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *portfolioServiceClient) GetPortfolio(ctx context.Context, in *GetPortfolioRequest, opts ...grpc.CallOption) (*GetPortfolioResponse, error) {
	out := new(GetPortfolioResponse)
	err := c.cc.Invoke(ctx, "/portfolio.v1.PortfolioService/GetPortfolio", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *portfolioServiceClient) GetOperations(ctx context.Context, in *GetOperationsRequest, opts ...grpc.CallOption) (*GetOperationsResponse, error) {
	out := new(GetOperationsResponse)
	err := c.cc.Invoke(ctx, "/portfolio.v1.PortfolioService/GetOperations", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *portfolioServiceClient) GetOperationSum(ctx context.Context, in *GetOperationSumRequest, opts ...grpc.CallOption) (*GetOperationSumResponse, error) {
	out := new(GetOperationSumResponse)
	err := c.cc.Invoke(ctx, "/portfolio.v1.PortfolioService/GetOperationSum", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PortfolioServiceServer is the server API for PortfolioService service.
// All implementations must embed UnimplementedPortfolioServiceServer
// for forward compatibility
type PortfolioServiceServer interface {
	GetSummary(context.Context, *GetSummaryRequest) (*GetSummaryResponse, error)
	ImportTransactions(*ImportTransactionsRequest, PortfolioService_ImportTransactionsServer) error
	GetPortfolio(context.Context, *GetPortfolioRequest) (*GetPortfolioResponse, error)
	GetOperations(context.Context, *GetOperationsRequest) (*GetOperationsResponse, error)
	GetOperationSum(context.Context, *GetOperationSumRequest) (*GetOperationSumResponse, error)
	mustEmbedUnimplementedPortfolioServiceServer()
}

// UnimplementedPortfolioServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPortfolioServiceServer struct {
}

func (UnimplementedPortfolioServiceServer) GetSummary(context.Context, *GetSummaryRequest) (*GetSummaryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSummary not implemented")
}
func (UnimplementedPortfolioServiceServer) ImportTransactions(*ImportTransactionsRequest, PortfolioService_ImportTransactionsServer) error {
	return status.Errorf(codes.Unimplemented, "method ImportTransactions not implemented")
}
func (UnimplementedPortfolioServiceServer) GetPortfolio(context.Context, *GetPortfolioRequest) (*GetPortfolioResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPortfolio not implemented")
}
func (UnimplementedPortfolioServiceServer) GetOperations(context.Context, *GetOperationsRequest) (*GetOperationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOperations not implemented")
}
func (UnimplementedPortfolioServiceServer) GetOperationSum(context.Context, *GetOperationSumRequest) (*GetOperationSumResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOperationSum not implemented")
}
func (UnimplementedPortfolioServiceServer) mustEmbedUnimplementedPortfolioServiceServer() {}

// UnsafePortfolioServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PortfolioServiceServer will
// result in compilation errors.
type UnsafePortfolioServiceServer interface {
	mustEmbedUnimplementedPortfolioServiceServer()
}

func RegisterPortfolioServiceServer(s grpc.ServiceRegistrar, srv PortfolioServiceServer) {
	s.RegisterService(&PortfolioService_ServiceDesc, srv)
}

func _PortfolioService_GetSummary_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSummaryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PortfolioServiceServer).GetSummary(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/portfolio.v1.PortfolioService/GetSummary",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PortfolioServiceServer).GetSummary(ctx, req.(*GetSummaryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PortfolioService_ImportTransactions_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ImportTransactionsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PortfolioServiceServer).ImportTransactions(m, &portfolioServiceImportTransactionsServer{stream})
}

type PortfolioService_ImportTransactionsServer interface {
	Send(*ImportTransactionsResponse) error
	grpc.ServerStream
}

type portfolioServiceImportTransactionsServer struct {
	grpc.ServerStream
}

func (x *portfolioServiceImportTransactionsServer) Send(m *ImportTransactionsResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _PortfolioService_GetPortfolio_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPortfolioRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PortfolioServiceServer).GetPortfolio(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/portfolio.v1.PortfolioService/GetPortfolio",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PortfolioServiceServer).GetPortfolio(ctx, req.(*GetPortfolioRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PortfolioService_GetOperations_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOperationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PortfolioServiceServer).GetOperations(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/portfolio.v1.PortfolioService/GetOperations",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PortfolioServiceServer).GetOperations(ctx, req.(*GetOperationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PortfolioService_GetOperationSum_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOperationSumRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PortfolioServiceServer).GetOperationSum(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/portfolio.v1.PortfolioService/GetOperationSum",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PortfolioServiceServer).GetOperationSum(ctx, req.(*GetOperationSumRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PortfolioService_ServiceDesc is the grpc.ServiceDesc for PortfolioService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PortfolioService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "portfolio.v1.PortfolioService",
	HandlerType: (*PortfolioServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetSummary",
			Handler:    _PortfolioService_GetSummary_Handler,
		},
		{
			MethodName: "GetPortfolio",
			Handler:    _PortfolioService_GetPortfolio_Handler,
		},
		{
			MethodName: "GetOperations",
			Handler:    _PortfolioService_GetOperations_Handler,
		},
		{
			MethodName: "GetOperationSum",
			Handler:    _PortfolioService_GetOperationSum_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ImportTransactions",
			Handler:       _PortfolioService_ImportTransactions_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "portfolio/v1/portfolio.proto",
}