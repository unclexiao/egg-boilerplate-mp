'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 文档型数据库
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  // 高性能缓存
  redis: {
    enable: true,
    package: 'egg-redis',
  },

  // 表单验证
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  // 跨域设置
  cors: {
    enable: false,
    package: 'egg-cors',
  },

  // 性能监控平台
  alinode: {
    enable: false,
    package: 'egg-alinode',
  },

  // 微信公众平台
  mp: {
    enable: true,
    package: 'egg-mp',
  },
};

