// const models = require('../models/products.js');
const express = require('express');
const models = require('../models/products');
const app = express();
const port = 8080;

app.get('/api/products/:product_id', (req, res) => {
  models.getProduct(req.params.product_id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else if (data.length === 0) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));

module.exports = app;