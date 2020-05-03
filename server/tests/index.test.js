import "regenerator-runtime/runtime";
import request from 'supertest';
import server from '../';

describe('tests products api', () => {
  it('should get a product', async () => {
    const res = await request(server).get('/api/products/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toEqual({'id': 1, 'name': 'batman'});
  });

  it('should 404 if the id does not exist', async () => {
    const res = await request(server).get('/api/products/101');
    expect(res.statusCode).toEqual(404);
  })
});