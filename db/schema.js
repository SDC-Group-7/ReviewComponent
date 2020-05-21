const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lego-reviews', {useMongoClient: true});

const Schema = mongoose.Schema({
  id: Number,
  user: {
    id: Number,
    name: String,
    date_of_birth: Date,
    building_experience: Number
  },
  product_id: Number,
  rating: Number,
  would_recommend: Boolean,
  purchased_for: Number,
  headline: String,
  review: String,
  is_helpful: Number,
  is_not_helpful: Number,
  play_experience: Number,
  difficulty_level: Number,
  value_for_money: Number,
  build_time: Number
});

let Review = mongoose.model('Review', Schema);

module.exports.create = (review, callback) => {
  review.is_helpful = 0;
  review.is_not_helpful = 0;
  new Review(review, {timestamps: {createdAt: 'created_at'}).save(callback);
};

module.exports.read = (product_id, callback) => {
  Review.find({product_id}).exec(callback);
};

module.exports.update = (id, data, callback) => {
  if (data.feedback === "is_helpful") {
    if (data.action === "+") {
      Review.updateOne({id}, {$inc: {is_helpful: 1}}).exec(callback);
    } else if (data.action === "-") {
      Review.updateOne({id}, {$inc: {is_helpful: -1}}).exec(callback);
    } else {
      console.error('malformed update query, no action match');
    }
  } else if (data.feedback === "is_not_helpful") {
    if (data.action === "+") {
      Review.updateOne({id}, {$inc: {is_not_helpful: 1}}).exec(callback);
    } else if (data.action === "-") {
      Review.updateOne({id}, {$inc: {is_not_helpful: -1}}).exec(callback);
    } else {
      console.error('malformed update query, no action match');
    }
  } else {
    console.error('malformed update query, no feedback match');
  }
};

module.exports.delete = (id, callback) => {
  Review.deleteOne({id}).exec(callback);
};
