const express = require('express');
const Products= require('../models/products');
const Reviews= require('../models/reviews');

const app = express();

app.get('/api/products/:product_id', (req, res) => {
  Products.getProduct(req.params.product_id)
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