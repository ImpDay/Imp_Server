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
                if (err.code === 'ER_DUP_ENTRY'){
                    reject(new Error('중복된 값이 있습니다!'));
                    return;
                } else{
                    console.log(err.message);
                    reject(new Error('사용자 정보를 가져오는데 실패했습니다.'));
                    return;
                }
                
            }
            console.log(results[0]);
            resolve(results);
            });
        });
    }
}


module.exports = UserDA;
