const db = require('../db');

const getProduct = function (id, callback) {
  const queryString = 'SELECT * from products where id = ?';
  db.connection.query(queryString, [id], (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getProduct,
};
