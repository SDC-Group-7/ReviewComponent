const sql = require('./index.psql.js');
const hipsum = require('./hipsum.js');
const broisms = require('./broisms.js');

const make_numbers = function* (k = 100) {
  let n = Math.random() * k >> 0;
  while (true) {
    n %= k;
    yield ++n;
  }
};

const make_text = function* (array) {
  let n = Math.random() * array.length >> 0;
  while (true) {
    n %= array.length;
    yield array[n++];
  }
};

const make_bool = function* () {
  let bool = true;
  while (true) {
    bool = !bool;
    yield bool;
  }
};

const user_id = make_numbers(100);
const product_id = make_numbers(1000);
const headline = make_text(broisms);
const review = make_text(hipsum);
const would_recommend = make_bool();
const rating = make_numbers(5);

async function reviews(n) {
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
  process.exit();
}

const n_entries = +process.argv[process.argv.length-1];
if (typeof n_entries === 'number' && !Number.isNaN(n_entries)) {
  reviews(+process.argv[process.argv.length-1]);
} else {
  console.log('provide numerical argument to this script. e.g. node seed.psql.js 100000');
}
