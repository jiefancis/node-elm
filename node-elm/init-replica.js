// 需要延迟执行以等待服务启动
setTimeout(function () {
  rs.initiate({
    _id: 'rs0',
    members: [
      {
        _id: 0,
        host: 'mongo1:27017',
        priority: 2,
      },
    ],
  });
}, 5000);
