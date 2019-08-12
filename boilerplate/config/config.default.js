/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // 加密字符串
  config.keys = appInfo.name + '_{{keys}}';

  // 微信小程序
  config.mp = {
    appId: '', // 公众平台应用编号
    appSecret: '', // 公众平台应用密钥
    mchId: '', // 商户平台商家编号
    apiKey: '', // 商户支付密钥
  };

  // 高性能缓存
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1', // 主机
      port: process.env.EGG_REDIS_PORT || 6379, // 端口
      password: process.env.EGG_REDIS_PASSWORD || '', // 密码
      db: process.env.EGG_REDIS_DB || '0', // 数据库
    },
  };

  // 文档型数据库
  config.mongoose = {
    url: 'mongodb://localhost:27017/teller', // 地址
    options: {
      useNewUrlParser: true,
      autoIndex: true,
      useCreateIndex: true,
    },
  };

  // 中间件
  config.middleware = [];

  // 用户配置
  const userConfig = {
    myAppName: 'tell-mp',
  };

  return {
    ...config,
    ...userConfig,
  };
};