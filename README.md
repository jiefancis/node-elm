# 项目介绍

- 本项目原地址是：[node-elm](https://github.com/bailicangdu/node-elm)，
- node-api：node-elm
- vue-h5: vue2-elm
- vue-pc: vue-manage

原先的项目因为时间比较久，mongodb 的数据库配置和 node 版本有冲突，本人用一天时间解决这些问题；其中涉及到 api 层的 mongodb 数据库和 vue2-elm 的 h5 中 node-sass 与 sass-loader 与 node 版本问题导致的启动报错问题等已被解决。如果想要运行项目，可以按照如下准备工作中的步骤启动 node-elm；按照项目运行中的 vue2-elm 安装对应版本的 node 和 node-sass sass-loader 版本运行

## 准备工作

### docker 构建 mongodb 数据库

node-elm 终端下，按顺序执行以下步骤：

- 0. 创建镜像：docker build -t mongodb .

- 1. 启动容器：docker-compose up -d

- 2. 将本地 sql 文件拷贝至 docker 容器内

  docker cp ../sql/ mongo1:/data/sql（在 node-elm 终端下执行）

- 3. 进入 docker mongo 容器

  docker exec -it container_id bash

  如果不懂 container_id 是多少，可以通过 docker ps 查看。

- 4. 在 mongo 容器内执行 mongorestore 命令

  mongorestore --port 27017 --username admin --password 123456 --authenticationDatabase admin --db elm /data/sql

- 5. 进入 mongodb 容器的 mongo 命令行

     mongosh 'mongodb://admin:123456@localhost:27017/elm?authSource=admin'

- 6. 初始化副本集

```
  rs.initiate({ _id: 'rs0', members: [ { _id: 0, host: 'localhost:27017', priority: 2 }] })
```

**注意事项：**
rs.initiate()中 host 如果写错了，可以通过

获取当前副本集配置-------var cfg = rs.conf()
修改成员的 host 信息------cfg.members[0].host = 'localhost:27017'
重新配置副本集----------rs.reconfig(cfg)

## 项目运行

- node-elm api

```

  node@v16.20.0

  npm install mongodb@latest mongoose@latest connect-mongo@latest

```

- vue2-elm h5 前端

```
  node 与 node-sass 版本问题

  - node@12.22.10

  - npm install -D --legacy-peer-deps node-sass@4 sass-loader@6
```

## 数据库

本人喜欢用 docker docker-compose 构建景象与容器，所以数据库也是用 docker 启动的，具体可看 node-elm-master/docker-compose.yml，这里面包含了 mongodb redis mysql 等的配置，Dockerfile 是构建 mongodb 数据库
