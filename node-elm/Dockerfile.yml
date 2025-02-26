# 使用官方MongoDB镜像作为基础
FROM mongo:6.0

# 设置环境变量
ENV MONGO_INITDB_DATABASE=elm
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=123456

# 复制自定义配置文件
COPY mongod.conf /etc/mongod.conf

# 复制副本集初始化脚本
COPY init-replica.js /docker-entrypoint-initdb.d/

# 暴露MongoDB默认端口
EXPOSE 27017

# 设置数据存储目录（官方镜像已处理）
VOLUME /data/db

# 使用自定义配置启动（官方镜像已支持MONGO_INITDB_*变量）
CMD ["mongod"]