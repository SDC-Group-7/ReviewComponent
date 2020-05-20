const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lego-reviews', {useMongoClient: true});

const Schema = mongoose.Schema({
  id: Number,
  user: {
    id: Number,
    name: String,
    experience: Number
  },
  product_id: Number,
  createdAt: Date,
  rating: Number,
  recommended: Boolean,
  subject: String,
  description: String,
  is_helpful: Number,
  is_not_helpful: Number,
  play_experience: Number,
  difficulty: Number,
  value: Number,
  build_time: Number,
});

let Review = mongoose.model('Review', Schema);

export default createOne = (review, callback) => {
  review.is_helpful = 0;
  review.is_not_helpful = 0;
  new Review(review, {timestamps: true}).save(callback);
};

export default readAll = (product_id, callback) => {
  Review.find({product_id}).exec(callback);
};

export default readOne = (id, callback) => {
  Review.find({id}).exec(callback);
};

export default updateOne = (id, data, callback) => {
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

export default deleteOne = (id, callback) => {
  Review.deleteOne({id}).exec(callback);
};
