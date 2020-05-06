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
        res.status(200).json(product);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;