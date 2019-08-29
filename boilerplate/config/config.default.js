/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * 内置 config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  /**
  * 随机签名字符串
  * @member Config#keys
  */
  config.keys = appInfo.name + '_{{keys}}';

  /**
  * 代理设置
  * @member Config#proxy
  */
  config.proxy = true;

  /**
  * 跨域设置
  * @member Config#mp
  * @property {String} appId - 公众平台应用编号
  * @property {String} appSecret - 公众平台应用密钥
  * @property {String} mchId - 商户平台商家编号
  * @property {String} apiKey - 商户支付密钥
  * @property {number}  notifyUrl  - 支付结果回调地址
  */
  config.mp = {
    appId: '',
    appSecret: '',
    mchId: '',
    apiKey: '',
    notifyUrl: '',
  };

  /**
  * 跨域设置
  * @member Config#cors
  * @property {String} allowMethods - 允许的方法
  * @property {bool} credentials - 是否带上请求凭证
  */
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  /**
   * 高性能缓存数据库
   * @member Config#redis
   * @property {String} host - 主机
   * @property {int} port - 端口
   * @property {String} password - 密码
   * @property {String} db - 数据库空间
   */
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '10',
    },
  };

  /**
   * 文档型数据库
   * @member Config#mongoose
   * @property {String} url - 地址
   * @property {Object} optints - 参数
   */
  config.mongoose = {
    url: 'mongodb://localhost:27017/teller',
    options: {
      useNewUrlParser: true,
      autoIndex: true,
      useCreateIndex: true,
    },
  };

  /**
  * 安全设置
  * @member Config#security
  * @property {String} domainWhiteList - 白名单列表
  * @property {Object} csrf - 跨站请求伪造
  */
  config.security = {
    domainWhiteList: [],
    csrf: {
      enable: false,
    },
  };

  /**
   * 性能监控
   * @member Config#alinode
   * @property {String} appid - 应用编号
   * @property {String} secret - 应用密钥
   */
  config.alinode = {
    appid: '',
    secret: '',
  };

  /**
  * 国际化
  * @member Config#i18n
  * @property {String} defaultLocale - 默认语言
  */
  config.i18n = {
    defaultLocale: 'zh-CN',
  };

  // 自定义用户配置
  const userConfig = {
    myAppName: 'tell-mp',
  };

  return {
    ...config,
    ...userConfig,
  };
};
