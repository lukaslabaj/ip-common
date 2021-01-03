PROTO_DIR = ./proto

install:
	go get -u github.com/golang/protobuf/protoc-gen-go
	go get github.com/uber/prototool/cmd/prototool

.PHONY: proto-gen
proto-gen:
	@PATH=$(PATH):$(PWD)/tools/protoc/bin \
	prototool generate $(PROTO_DIR)
	cp -R $(PWD)/go/ $(PWD)/..
	cp -R $(PWD)/go/ip-auth/ $(PWD)/../ip-portfolio
	cp -R $(PWD)/js/ $(PWD)/../ip-frontend/proto
