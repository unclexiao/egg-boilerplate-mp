'use strict';
const whiteList = ['/', '/welcome', '/login/wechat', '/login/captcha', '/login/sms', '/signup/sms']; // 不需要校验登陆信息

module.exports = () => {
  return async function (ctx, next) {
    ctx.platform = ctx.request.header['x-platform'] || 'app';
    if (whiteList.includes(ctx.path)) {
      return next();
    }
    const uid = ctx.request.header['x-csrf-uid'];
    if (!uid || uid.length !== 24) {
      throw new Error('Not Login');
    }
    ctx.uid = uid;
    return next();
  };
};
