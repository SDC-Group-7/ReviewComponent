const {create} = require('../');
const {
  user_id,
  product_id,
  name,
  headline,
  /*review,*/
  would_recommend,
  rating
} = require('./generators.js');
const reviewer = require('./client.js');
const save = async review => {
  /*console.time('reviews');*/
  await create({
    product_id: product_id.next().value,
    name: name.next().value,
    headline: headline.next().value,
    review,
    would_recommend: would_recommend.next().value,
    rating: rating.next().value,
    age_group: rating.next().value,
    building_experience: rating.next().value,
    purchased_for: rating.next().value,
    play_experience: rating.next().value,
    difficulty_level: rating.next().value,
    value_for_money: rating.next().value,
    build_time: rating.next().value
  })
  .catch(console.error);
  /*console.timeEnd('reviews');*/
};

reviewer(save);
/*
const n_entries = +process.argv[process.argv.length-1];
if (typeof n_entries === 'number' && !Number.isNaN(n_entries)) {
  reviews(+process.argv[process.argv.length-1]);
} else {
  console.log('provide numerical argument to this script. e.g. node seed.mongo.js 100000');
}
*/
