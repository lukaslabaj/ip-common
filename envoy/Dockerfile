FROM envoyproxy/envoy:v1.15.0

COPY envoy.yaml /etc/envoy/envoy.yaml

EXPOSE 18080
EXPOSE 9901

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l info