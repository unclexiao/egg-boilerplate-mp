'use strict';
const chalk = require('chalk');

module.exports = () => {
  return async (ctx, next) => {
    // 打印请求参数与返回数据，建议仅在开发环境中启用
    const { request, response } = ctx;
    console.log(
      chalk.yellow(request.method) + ' ' + chalk.yellow(request.originalUrl)
    );
    console.log(JSON.stringify(request.body, null, 4));
    await next();
    console.log(
      chalk.green(response.message) + ' ' + chalk.green(response.status)
    );
    console.log(JSON.stringify(response.body, null, 4));
  };
};
