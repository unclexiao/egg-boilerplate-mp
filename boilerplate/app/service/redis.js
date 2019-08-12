'use strict';

const Service = require('egg').Service;
class RedisService extends Service {
    // 返回增加后自增
    async incr(key) {
        const val = await this.app.redis.incr(key);
        return val;
    }

    // 获取缓存字符串
    async get(key) {
        const val = await this.app.redis.get(key);
        try {
            return JSON.parse(val);
        } catch (e) {
            return val;
        }
    }

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

    // 获取第一个
    async getFirstIndex(key) {
        return this.app.redis.lpop(key);
    }

    // 获取最后一个
    async getEndIndex(key) {
        return this.app.redis.rpop(key);
    }

    // 获取缓存的长度
    async getLength(key) {
        return this.app.redis.llen(key);
    }

    // 设置缓存对象
    async hashSet(key, val) {
        return this.app.redis.hmset(key, val);
    }

    // 取缓存对象的所有值
    async hashGet(key) {
        return this.app.redis.hgetall(key);
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