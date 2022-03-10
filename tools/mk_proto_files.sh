#!/bin/bash
set -e
cd "`dirname $0`/../proto"

PATH=../tools/protoc/bin:$PATH
#export PATH="$(PATH):$(HOME)/.pub-cache/bin"
#PATH=$PATH:$GOPATH/bin

echo Step: lint
buf lint

echo Step: proto generate
#find ../src/proto -name \*.pb.go -a -print0 | xargs -0 -r rm --
#find ../../client/Assets/Proto/Generated -name \*.cs -a -print0 | xargs -0 -r rm --

rm -rf ../gen

buf generate

echo done

