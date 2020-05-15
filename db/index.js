const mysql = require('mysql');

const connection = mysql.createPool({
  connectionLimit: 100,
  host: 'mysql',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

module.exports = { connection };
