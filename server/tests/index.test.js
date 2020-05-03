import "regenerator-runtime/runtime";
import supertest from 'supertest';
import server from '../server';
import db from '../../db';

const request = supertest(server);

describe('tests products api', () => {
  afterAll(async(done) => {
    db.connection.end();
    done();
  });

  it('should get a product', async (done) => {
    const res = await request.get('/api/products/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({'id': 1, 'name': 'batman'});
    done();
  });

  it('should 404 if the id does not exist', async (done) => {
    const res = await request.get('/api/products/101');
    expect(res.statusCode).toEqual(404);
    done();
  })
});