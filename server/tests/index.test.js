import 'regenerator-runtime/runtime';
import supertest from 'supertest';

import db from '../../db';
import server from '../server';
import fixture from '../../legos/fixtures';

const request = supertest(server);

describe('tests api', () => {
  afterAll(async(done) => {
    db.connection.end();
    done();
  });

  // Test product apis
  it('should get a reviews for a product', async (done) => {
    const res = await request.get(`/api/products/${fixture.product.id}/reviews`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.productName).toEqual('batman');
    expect(res.body.reviews).toBeDefined();
    expect(res.body.reviews[0].experience).toBeDefined();
    expect(res.body.reviews[0].user).toBeDefined();
    done();
  });

  it('should 404 if the id does not exist', async (done) => {
    const res = await request.get('/api/products/null/reviews');
    expect(res.statusCode).toEqual(404);
    done();
  });
});