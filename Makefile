PROTO_DIR = ./proto

install:
	go get -u google.golang.org/protobuf/cmd/protoc-gen-go
	go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc
	dart pub global activate protoc_plugin

.PHONY: proto-gen
proto-gen:
	export PATH="$(PATH):$(HOME)/.pub-cache/bin"
	export PATH="$(PATH):$(go env GOPATH)/bin"
	cd proto
	#buf lint
	buf generate
	#buf generate proto/auth
	#buf generate proto/porfolio

	#cp -R $(PWD)/js/ $(PWD)/../ip-frontend/proto
	#cp -R $(PWD)/go/ $(PWD)/..
	#cp -R $(PWD)/go/ip-auth/ $(PWD)/../ip-portfolio

#.PHONY: proto-gen
#proto-gen:
#	export PATH="$PATH:$HOME/.pub-cache/bin" \
#	export PATH="$PATH:$(go env GOPATH)/bin" \
#	@PATH=$(PATH):$(PWD)/tools/protoc/bin \
#	prototool generate $(PROTO_DIR)
#	cp -R $(PWD)/js/ $(PWD)/../ip-frontend/proto
#	#cp -R $(PWD)/go/ $(PWD)/..
#	#cp -R $(PWD)/go/ip-auth/ $(PWD)/../ip-portfolio
