
const express = require('express');
const models = require('../models/products');

const app = express();

app.get('/api/products/:product_id', (req, res) => {
  models.getProduct(req.params.product_id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else if (data.length === 0) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).json(data[0]);
    }
  });
});

module.exports = app;