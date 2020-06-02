const {create} = require('../');

const {
  user_id,
  product_id,
  name,
  headline,
  would_recommend,
  rating
} = require('./generators.js');

const chat_client = require('./client.js');

const write_to_db = async review => {
  await create({
    review,
    product_id: product_id.next().value,
    name: name.next().value,
    headline: headline.next().value,
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

chat_client(write_to_db);
