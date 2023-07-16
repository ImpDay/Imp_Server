// dao/userDao.js

const db = require('./db');

class UserDA {
    async getAllUsers() {
        const query = 'SELECT * FROM Users';
        return new Promise((resolve, reject) => {
            db.execute(query, (err, results) => {
            if (err) {
                
                console.log(error.message);
                reject(new Error('사용자 정보를 가져오는데 실패했습니다.'));
                return;
            }
            console.log(results[0]);
            resolve(results);
            });
        });
    }

  async createUser(userData) {
    const query = 'INSERT INTO Users (userId, password, nickname, profileImagePath) VALUES (?, ?, ?, ?)';
    const values = [userData.userId, userData.password, userData.nickname, userData.profileImagePath];

    return new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          reject(new Error('중복된 값이 있습니다!'));
          return;
        } else {
            console.log(err.message);
          reject(new Error('사용자 정보를 가져오는데 실패했습니다.'));
          return;
        }
      }
      console.log(results.insertId);
      resolve(results.insertId); // 생성된 사용자의 ID 반환
      });
    });
  }

  async getUserById(id) {
    const query = 'SELECT * FROM Users WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [id], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('사용자 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 사용자가 없습니다.'));
          return;
        }
        const user = results[0];
        console.log(user);
        resolve(user);
      });
    });
  }

  async getUserNicknameById(id) {
    const query = 'SELECT nickname FROM Users WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [id], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('사용자 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 사용자가 없습니다.'));
          return;
        }
        const user = results[0];
        console.log(user);
        resolve(user);
      });
    });
  }
}

module.exports = UserDA;
