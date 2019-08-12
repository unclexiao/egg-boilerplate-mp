'use strict';

const {
    app,
    assert
} = require('egg-mock/bootstrap');

describe('test/app/controller/redis.test.js', () => {
    it('should get value', () => {
        const ctx = app.mockContext({});
        const index = await ctx.service.redis.get('userIndex');
        assert(index == '30');
    });
});