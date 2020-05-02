var fs = require('fs');
var Promise = require('bluebird');

// randomize all user age
const randomAge = function (data) {
  data.forEach((person) => {
    var age = Math.floor(Math.random() * 100) + 5;
    person.age = age;
  });
};

const addUsers = async (users, db) => {
  await Promise.map(users, (user) => {
    return db.connection.query('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age]);
  });
};

const addProducts = async (products, db) => {
  await Promise.map(products, (product) => {
    return db.connection.query('INSERT INTO products (name) VALUES (?)', [product.name]);
  })
}


module.exports = {
  randomAge,
  addUsers,
  addProducts
}