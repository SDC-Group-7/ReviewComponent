var mysql = require('mysql');
var data = require('./legos_data.js');
var helpers = require('../db/helpers.js');
var fs = require('fs');

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

connection.connect();

// Insert 100 users into the database
data.users.forEach((name, index) => {
  connection.query('INSERT INTO users (name, age) VALUES (?, ?)', [name.name, name.age],
    function (err, success) {
      if (err) {
        console.log('Error: ', err);
      }
      if (index === data.users.length - 1) {
        console.log('Successfully inserted 100 users.');
        connection.end();
      }
    });
});

// Initially created random user data with age 1 and used randomAge to randomize age
// Update the initial data into a data file
// helpers.randomAge(data.users);
// fs.writeFile('./legos_data.js', JSON.stringify(data), () => 1)