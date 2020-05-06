const express = require('express');
const Reviews = require('../controllers/reviews');

const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('/api/products/:product_id/reviews', (req, res) => {
  const productId = req.params.product_id;
  Reviews.getReviewsForProduct(productId)
    .then((reviews) => {
      if (reviews.count === undefined) {
        throw 'Reviews not found';
      } else {
        res.status(200).json(reviews);
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = app;