'use strict';

module.exports = () => {
  const config = (exports = {});

  /**
  * 启用中间件
  * @member Config#middleware
  */
  config.middleware = [ 'errorHandler', 'userAuth' ];

  return config;
};
