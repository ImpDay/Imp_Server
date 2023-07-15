const mysql = require('mysql');

const db = require('./db');

// Set mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'roqkf##01',
  database: 'imp_db'
});

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Users', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
