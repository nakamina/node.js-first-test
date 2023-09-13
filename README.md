# First Server Test App

## Dockerfile を使わないバージョン

- 以下を実行して Docker コンテナを実行し中に入る

```shell
docker run --rm -it --name first-server-test-app-dev -v $(pwd):/app -p 3000:3000 node:20 /bin/bash

root@a9e3dc48cd68:/#
```
- コンテナ内で以下を実行

```shell
cd /app
npm install
node app.js # サーバが立ち上がる
```

## Dockerfile を使うバージョン

```shell
docker build -t first-server-test-app .
docker run --rm -it --name first-server-test-app-dev first-server-test-app # サーバが立ち上がる
```