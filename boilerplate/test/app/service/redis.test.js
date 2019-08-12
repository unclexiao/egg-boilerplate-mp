'use strict';

const {
    app,
    assert
} = require('egg-mock/bootstrap');

describe('test/app/controller/redis.test.js', () => {
    it('should get value', () => {
        const ctx = app.mockContext({});
        const name = 'tell';
        await ctx.service.redis.set('name', name);
        const value = await ctx.service.redis.get(name);
        assert(value === name);
    });
});