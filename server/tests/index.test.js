import "regenerator-runtime/runtime";
import request from 'supertest';
import server from '../';

test ('api', async () => {
  const res = await request(server).get('/');
  expect(res.statusCode).toEqual(200);
});

describe('api', () => {
  it('should not work', async () => {
    const res = await request(server).get('/api/products/1');
    expect(res.statusCode).toEqual(200);
  })
});