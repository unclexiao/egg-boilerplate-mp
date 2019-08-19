'use strict';

module.exports = (option, app) => {
  // 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      app.emit('error', err, this);
      const status = ctx.status === 504 ? 504 : err.status || 500;
      // 错误国际化，参考：https://eggjs.org/zh-cn/core/i18n.html
      const message = ctx.__(err.message);
      ctx.body = {
        success: false,
        message,
      };
      ctx.status = status;
    }
  };
};
