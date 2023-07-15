// dao/userDao.js

const db = require('./db');

class UserDA {
  async getAllUsers() {
    try {
      const query = 'SELECT * FROM Users';
      return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
          if (err) {
            reject(err);
            return;
          }
          console.log(results[0]);
          resolve(results);
        });
      });
    } catch (error) {
      console.log(error.message);
      throw new Error('사용자 정보를 가져오는데 실패했습니다.');
    }
  }
}

module.exports = UserDA;
