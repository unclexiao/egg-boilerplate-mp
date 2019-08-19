'use strict';
const whiteList = [ '/', '/welcome', '/login/wechat', '/login/captcha', '/login/sms', '/signup/sms' ]; // 不需要校验登陆信息

module.exports = () => {
  return async function(ctx, next) {
    ctx.platform = ctx.request.header['x-platform'] || 'app';
    if (whiteList.includes(ctx.path)) {
      return next();
    }
    const userId = ctx.request.header['x-csrf-token'];
    if (userId && userId.length === 24) {
      ctx.uid = userId;
    } else {
      throw new Error('Not Login');
    }
    return next();
  };
};
