const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysql',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

module.exports = { connection };
