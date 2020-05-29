const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lego-reviews', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema({
  id:                  Number,
  product_id:          Number,
  name:                String,
  headline:            String,
  review:              String,
  would_recommend:     Boolean,
  rating:              Number,
  is_helpful:          Number,
  is_not_helpful:      Number,
  age_group:           Number,
  building_experience: Number,
  purchased_for:       Number,
  play_experience:     Number,
  difficulty_level:    Number,
  value_for_money:     Number,
  build_time:          Number
});

let Review = mongoose.model('Review', Schema);

module.exports.create = (review, callback) => {
  review.is_helpful = 0;
  review.is_not_helpful = 0;
  if (callback) {
    new Review(review).save(callback);
  } else {
    return new Review(review).save();
  }
};

module.exports.read = (product_id, callback) => {
  Review.find({product_id}).exec(callback);
};

module.exports.readOne = (id, callback) => {
  Review.findOne({id}).exec(callback);
};

module.exports.update = (id, data, callback) => {
  if (data.feedback === "is_helpful") {
    if (data.action === "+") {
      Review.updateOne({id}, {$inc: {is_helpful: 1}}).exec(callback);
    } else if (data.action === "-") {
      Review.updateOne({id}, {$inc: {is_helpful: -1}}).exec(callback);
    } else {
      console.error('malformed update query, no matching action for ', data.action);
    }
  } else if (data.feedback === "is_not_helpful") {
    if (data.action === "+") {
      Review.updateOne({id}, {$inc: {is_not_helpful: 1}}).exec(callback);
    } else if (data.action === "-") {
      Review.updateOne({id}, {$inc: {is_not_helpful: -1}}).exec(callback);
    } else {
      console.error('malformed update query, no matching action for ', data.action);
    }
  } else {
    console.error('malformed update query, no matching feedback for ', data.feedback);
  }
};

module.exports.delete = (id, callback) => {
  Review.deleteOne({id}).exec(callback);
};

module.exports.schema = Review;
