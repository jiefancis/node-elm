# 项目介绍

- 本项目原地址是：[node-elm](https://github.com/bailicangdu/node-elm)，
- node-api：node-elm-master
- vue-h5: vue2-elm-master
- vue-pc: vue-manage-master

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

## 项目启动

- docker
  这个项目时间比较久，后端部分 mongodb("mongodb": "^6.13.0", "mongoose": "^8.3.4")需要以副本集方式启动（具体可看 node-elm-master/README-en.md），才可正常 create 数据，前端部分因为 node-sass 问题启动回报错，目前已解决，具体可看 vue2-elm-master/README-en.md.

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
