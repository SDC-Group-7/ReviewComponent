const db = require('../db');

const getReview = function (id, callback) {
  const queryString = 'SELECT * from reviews where id = ?';
  db.connection.query(queryString, [id], (err, data) => {

    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getReview,
};
