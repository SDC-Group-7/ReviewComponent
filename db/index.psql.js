const postgres = require('postgres');
const options = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
};
module.exports = postgres({...options});
