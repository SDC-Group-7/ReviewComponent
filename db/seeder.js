var mysql = require('mysql');
var data = require('./legos_data.js');
var helpers = require('../db/helpers.js');
var fs = require('fs');
var Promise = require('bluebird');

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

connection.connect();

// Insert 100 users into the database
const addUsers = async () => {
  await Promise.map(data.users, (user) => {
    return connection.query('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age]);
  });
};

const addProducts = async () => {
  await Promise.map(data.products, (product) => {
    return connection.query('INSERT INTO products (name) VALUES (?)', [product.name]);
  })
}

addUsers().then( async () => {
  for (let i = 0; i < 20; i += 1) {
    // Insert 5 unique products 20 times
    await addProducts()
  }
}).then(() => connection.end())



  {play_experience: 4, difficulty: 4, value: 5, build_time: 5},
// Initially created random user data with age 1 and used randomAge to randomize age
// Update the initial data into a data file
// helpers.randomAge(data.users);
// fs.writeFile('./legos_data.js', JSON.stringify(data), () => 1)