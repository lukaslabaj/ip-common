#!/bin/bash

tag=$(date +%s)

docker build envoy --tag envoy

docker tag envoy eu.gcr.io/iportfolio-284814/envoy:$tag

docker push eu.gcr.io/iportfolio-284814/envoy:$tag

helm upgrade --install --wait --atomic envoy deploy/gke-charts --set tag=$tag

docker rmi envoy