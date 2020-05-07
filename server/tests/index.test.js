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

  // Test reviews apis
  it('should get a reviews for a product', async (done) => {
    const res = await request.get(`/api/products/${fixture.id}/reviews`);

    const expectedObjKeys = ['productName', 'reviews', 'count'];
    const expectedReviewKeys = ['id', 'createdAt', 'rating', 'recommended', 'subject', 'isHelpful', 'isNotHelpful', 'experience', 'user'];
    const expectedExperienceKeys = ['playExperience', 'difficulty', 'value', 'buildTime'];
    const expectedUserKeys = ['name', 'age'];
    const review = res.body.reviews[0];

    expect(res.statusCode).toEqual(200);
    expect(res.body.productName).toEqual('batman');
    expect(review).toBeDefined();
    expect(review.experience).toBeDefined();
    expect(review.user).toBeDefined();
    expect(Object.keys(res.body)).toEqual(expect.arrayContaining(expectedObjKeys));
    expect(Object.keys(review)).toEqual(expect.arrayContaining(expectedReviewKeys));
    expect(Object.keys(review.experience)).toEqual(expect.arrayContaining(expectedExperienceKeys));
    expect(Object.keys(review.user)).toEqual(expect.arrayContaining(expectedUserKeys));
    done();
  });

  it('should 404 if the id does not exist', async (done) => {
    const res = await request.get('/api/products/null/reviews');
    expect(res.statusCode).toEqual(404);
    done();
  });
});