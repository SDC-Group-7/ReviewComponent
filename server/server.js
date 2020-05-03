const express = require('express');
const models = require('../models/products');

const app = express();

app.get('/api/products/:product_id', (req, res) => {
  models.getProduct(req.params.product_id)
    .then((product) => {
      if (product.length === 0) {
        res.status(404).send('Product not found');
      } else {
        res.status(200).json(product[0]);
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = app;