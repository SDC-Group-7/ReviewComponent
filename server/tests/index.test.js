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
  it('should get a product', async (done) => {
    const res = await request.get(`/api/products/${fixture.product.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(fixture.product);
    done();
  });

  it('should 404 if the id does not exist', async (done) => {
    const res = await request.get('/api/products/null');
    expect(res.statusCode).toEqual(404);
    done();
  });

  // Test review apis
  it('should get a review', async (done) => {
    const res = await request.get(`/api/products/${fixture.product.id}/reviews`);
    const review = res.body[0];
    expect(res.statusCode).toEqual(200);
    expect(review.product_id).toEqual(fixture.product.id);
    done();
  });

  it('should 404 if the id does not exist', async (done) => {
    const res = await request.get('/api/products/0/reviews');
    expect(res.statusCode).toEqual(404);
    done();
  });
});