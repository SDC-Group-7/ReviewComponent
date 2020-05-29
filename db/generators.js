const hipsum = require('./hipsum.js');
const broisms = require('./broisms.js');
const names = require('./names.js');

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

const user_id = make_numbers(10000);
const product_id = make_numbers(10000);
const name = make_text(names);
const headline = make_text(broisms);
const review = make_text(hipsum);
const would_recommend = make_bool();
const rating = make_numbers(5);

module.exports = {
  user_id,
  product_id,
  name,
  headline,
  review,
  would_recommend,
  rating
};
