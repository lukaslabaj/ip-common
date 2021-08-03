#!/bin/bash

docker stop envoy

docker build envoy --tag envoy --build-arg ENVOY_CONFIG=envoy-local.yaml

docker run -d --name envoy -p 9901:9901 -p 18080:18080 envoy