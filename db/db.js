const mysql = require('mysql');

// Set mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'roqkf##01',
  database: 'imp_db'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL 연결 성공했어');
});

module.exports = connection;
