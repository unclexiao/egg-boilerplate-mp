'use strict';

const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/app/service/redis.test.js', () => {
  it('should get value', async () => {
    const ctx = app.mockContext({});
    const {
      redis,
    } = ctx.service;
    const cv = {
      key: 'index',
      value: 520,
    };
    await redis.setNumber(cv.key, cv.value);
    const res = await redis.getNumber(cv.key);
    assert(res === cv.value);
  });
});
