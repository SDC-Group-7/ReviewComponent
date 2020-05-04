const db = require('../db');

const getProduct = function (id) {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * from products where id = ${id}`;
    db.connection.query(queryString, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = {
  getProduct,
};
