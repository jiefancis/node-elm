# 项目介绍

- 本项目原地址是：[node-elm](https://github.com/bailicangdu/node-elm)，
- node-api：node-elm-master
- vue-h5: vue2-elm-master
- vue-pc: vue-manage-master

## 项目启动

- docker
  这个项目时间比较久，后端部分 mongodb("mongodb": "^6.13.0", "mongoose": "^8.3.4")需要以副本集方式启动（具体可看 node-elm-master/README-en.md），才可正常 create 数据，前端部分因为 node-sass 问题启动回报错，目前已解决，具体可看 vue2-elm-master/README-en.md.

## 项目运行

- vue2-elm h5 前端

```
  node 与 node-sass 版本问题

  - node@12.22.10

  - npm install -D --legacy-peer-deps node-sass@4 sass-loader@6
```

## 数据库

本人喜欢用 docker docker-compose 构建景象与容器，所以数据库也是用 docker 启动的，具体可看 node-elm-master/docker-compose.yml，这里面包含了 mongodb redis mysql 等的配置，Dockerfile 是构建 mongodb 数据库
