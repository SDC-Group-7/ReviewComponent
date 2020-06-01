const {create} = require('../');
const {
  user_id,
  product_id,
  name,
  headline,
  review,
  would_recommend,
  rating
} = require('./generators.js');

const reviews = async n => {
  console.log('creating ' + n + ' reviews');
  console.time('reviews');
  for (let id = 0; id < n; id++) {
    await create({
      id,
      product_id: product_id.next().value,
      name: name.next().value,
      headline: headline.next().value,
      review: review.next().value,
      would_recommend: would_recommend.next().value,
      rating: rating.next().value,
      age_group: null,
      building_experience: null,
      purchased_for: null,
      play_experience: null,
      difficulty_level: null,
      value_for_money: null,
      build_time: null
    })
    .then(console.log)
    .catch(console.error);
  }
  console.timeEnd('reviews');
  process.exit();
};

const n_entries = +process.argv[process.argv.length-1];
if (typeof n_entries === 'number' && !Number.isNaN(n_entries)) {
  reviews(+process.argv[process.argv.length-1]);
} else {
  console.log('provide numerical argument to this script. e.g. node seed.mongo.js 100000');
}
