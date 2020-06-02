const {create} = require('../');

const {
  user_id,
  product_id,
  name,
  headline,
  would_recommend,
  rating
} = require('./generators.js');

const reviewer = require('./client.js');

const save = async review => {
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
};

reviewer(save);
