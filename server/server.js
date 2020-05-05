const express = require('express');
const Products = require('../controllers/products');
const Reviews = require('../controllers/reviews');

const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('/api/products/:product_id', (req, res) => {
  const productId = req.params.product_id;
  Products.getProduct(productId)
    .then((product) => {
      if (product.length === 0) {
        res.status(404).send('Product not found');
      } else {
        res.status(200).json(product[0]);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/api/products/:product_id/reviews', (req, res) => {
  const productId = req.params.product_id;
  Reviews.getReviewsForProduct(productId)
    .then((reviews) => {
      if (reviews && reviews.length === 0) {
        res.status(404).send('Review not found');
      } else {
        res.status(200).json(reviews);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;