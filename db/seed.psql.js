const sql = require('./index.psql.js');
const {
  user_id,
  product_id,
  name,
  headline,
  review,
  would_recommend,
  rating
} = require('./generators.js');

async function users(n = 10000) {
  console.log('creating ' + n + ' users');
  console.time('users');
  for (let i = 0; i < n; i++) {
    await sql`
      insert into users (
        name
      ) values (
        ${name.next().value}
      )
    `
  }
  console.timeEnd('users');
}

async function reviews(n = 10000000) {
  console.log('creating ' + n + ' reviews');
  console.time('reviews');
  for (let i = 0; i < n; i++) {
    await sql`
      insert into reviews (
        user_id,
        product_id,
        headline,
        review,
        would_recommend,
        rating
      ) values (
        ${user_id.next().value},
        ${product_id.next().value},
        ${headline.next().value},
        ${review.next().value},
        ${would_recommend.next().value},
        ${rating.next().value}
      )
    `
  }
  console.timeEnd('reviews');
}

async function seed() {
  await users();
  await reviews();
  sql.end({timeout: null});
  process.exit();
}

seed();
