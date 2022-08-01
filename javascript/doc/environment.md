# Execution Environment

## javascript engine

v8
javascriptcore

## runtime

[nodejs](http://nodejs.org)

```sh
# install package
nvm install --tls
# run
node <file>
```

[bun](https://github.com/oven-sh/bun)

```sh
# native binary
curl -fsSL https://bun.sh/install | bash
# docker image
docker pull jarredsumner/bun:edge
docker run --rm --init --ulimit memlock=-1:-1 jarredsumner/bun:edge
# run
bun <file>

```

browser,open dev-tool
