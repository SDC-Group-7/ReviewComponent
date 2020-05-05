const db = require('../db');
const helpers = require('./helpers');

const getProduct = function (productId) {
  return new Promise((resolve, reject) => {
    const queryString = `
    SELECT prod.name AS product_name, rev.rating, rev.recommended, rev.subject, rev.is_helpful, rev.is_not_helpful, exp.play_experience, exp.difficulty, exp.value, exp.build_time, users.name, users.age FROM products AS prod
    JOIN reviews AS rev ON rev.product_id=prod.id
    JOIN experiences AS exp ON exp.id=rev.experience_id
    JOIN users ON users.id=rev.user_id
    WHERE prod.id=${productId}`;

    db.connection.query(queryString, (err, data) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      const product = helpers.getProductData(data);
      resolve(product);
    });
  });
};

module.exports = {
  getProduct,
};
