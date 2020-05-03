import "regenerator-runtime/runtime";
import supertest from 'supertest';

import db from '../../db';
import server from '../server';

const request = supertest(server);

describe('tests products api', () => {
  afterAll(async(done) => {
    db.connection.end();
    done();
  });

  it('should get a product', async (done) => {
    const product = {'id': 1, 'name': 'batman'};
    const res = await request.get(`/api/products/${product.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(product);
    done();
  });

  it('should 404 if the id does not exist', async (done) => {
    const res = await request.get('/api/products/null');
    expect(res.statusCode).toEqual(404);
    done();
  })
});