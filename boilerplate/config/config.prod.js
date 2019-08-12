'use strict';

module.exports = () => {
  const config = (exports = {});

  // 非关系型数据库
  config.mongoose = {
    url: 'mongodb://localhost:27017/teller',
    options: {
      useNewUrlParser: true,
      autoIndex: true,
      useCreateIndex: true,
    },
  };

  // 自定义中间件
  config.middleware = [];

  return config;
};