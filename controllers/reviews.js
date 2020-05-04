const db = require('../db');

const getReviewsForProduct = function (productId) {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM reviews LEFT JOIN products ON reviews.product_id=products.id WHERE products.id=${productId}`;
    db.connection.query(queryString, (err, reviews) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      resolve(reviews);
    });
  });
};

module.exports = {
  getReviewsForProduct,
};
