const db = require('./db');

class FriendDA {
    async getAllFriends() {
        const query = 'SELECT * FROM Friends';
        return new Promise((resolve, reject) => {
            db.execute(query, (err, results) => {
            if (err) {
                console.log(error.message);
                reject(new Error('모든 질문 정보를 가져오는데 실패했습니다.'));
                return;
            }
            resolve(results);
            });
        });
    }

  async createFriends(friendData) {
    const query = 'INSERT INTO Friends (userId1, userId2) VALUES (?, ?)';
    const values = [friendData.userId1, friendData.userId2];
    return new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          reject(new Error('중복된 값이 있습니다!'));
          return;
        } else {
          console.log(err.message);
          reject(new Error('질문을 생성하는데 실패했습니다.'));
          return;
        }
      }
      console.log(results.insertId);
      resolve(results.insertId); // 생성된 템플릿의 ID 반환
      });
    });
  }

  async deleteFriend(friendData) {
    const query = 'DELETE FROM Friends WHERE userId1 = ? AND userId2 = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [friendData.userId1, friendData.userId2], (err, results) => {
      if (err) {
        console.log(err.message);
        reject(new Error('친구관계를 삭제하는데 실패했습니다.'));
        return;
      }
      resolve();
      });
    });
  }

  

  async getAllFriendsByUserId(userId) {
    const query = 'SELECT CASE WHEN userId1 = ? THEN userId2 ELSE userId1 END AS friendId FROM Friends WHERE userId1 = ? OR userId2 = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [userId, userId, userId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('친구 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 사용자가 가진 친구가 없습니다.'));
          return;
        }
        const friends = results.map(item => item.friendId);
        resolve(friends);
      });
    });
  }

  
}

module.exports = FriendDA;
