'use strict';

const Service = require('egg').Service;
class RedisService extends Service {
  // 获取缓存数字
  async getNumber(key) {
    const val = await this.app.redis.get(key);
    return val ? parseInt(val) : 0;
  }

  // 设置缓存数字
  async setNumber(key, number) {
    const val = parseInt(number);
    this.app.redis.set(key, val);
    return val;
  }

  // 设置缓存对象
  async hashSet(key, val) {
    return this.app.redis.hmset(key, val);
  }

  // 取缓存对象的所有值
  async hashGet(key) {
    const obj = await this.app.redis.hgetall(key);
    return JSON.stringify(obj) === '{}' ? null : obj;
  }

  // 设置过期时间
  async setExpire(key, seconds) {
    return this.app.redis.expire(key, seconds);
  }

  // 删除指定缓存
  async del(key) {
    return this.app.redis.del(key);
  }

}

module.exports = RedisService;
