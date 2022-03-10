https://medium.com/swlh/go-modules-with-private-git-repository-3940b6835727

for okteto:
1. in github : create access token (https://github.com/settings/tokens)
2. in okteto : create secret GIT_ACCESS_TOKEN with github access token
3. in okteto-pipeline : send secret to docker as argument

```bash
- okteto build --build-arg GIT_ACCESS_TOKEN=${GIT_ACCESS_TOKEN} -t okteto.dev/ip-portfolio:${OKTETO_GIT_COMMIT}
```

5. in dockerfile : add access to private repository

```bash
ARG GIT_ACCESS_TOKEN
RUN go env -w GOPRIVATE=github.com/lukaslabaj
RUN git config --global url."https://lukaslabaj:${GIT_ACCESS_TOKEN}@github.com".insteadOf "https://github.com"
```
