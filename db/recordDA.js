// dao/userDao.js

const db = require('./db');

class RecordDA {
    async getAllRecords() {
        const query = 'SELECT * FROM Records';
        return new Promise((resolve, reject) => {
            db.execute(query, (err, results) => {
            if (err) {
                console.log(error.message);
                reject(new Error('모든 레코드 정보를 가져오는데 실패했습니다.'));
                return;
            }
            resolve(results);
            });
        });
    }


  async deleteRecord(recordId) {
    const query = 'DELETE FROM Records WHERE recordId = ?';
    const values = recordId;
    return new Promise((resolve, reject) => {
      db.execute(query, [values], (err, results) => {
      if (err) {
        console.log(err.message);
        reject(new Error('record를 삭제하는데 실패했습니다.'));
        return;
      }
      resolve();
      });
    });
  }

  async createRecord(recordData) {
    const query = 'INSERT INTO Records (templateId) VALUES (?)';
    const values = [recordData.templateId];
    return new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          reject(new Error('중복된 값이 있습니다!'));
          return;
        } else {
          console.log(err.message);
          reject(new Error('템플릿을 생성하는데 실패했습니다.'));
          return;
        }
      }
      console.log(results.insertId);
      resolve(results.insertId); // 생성된 템플릿의 ID 반환
      });
    });
  }

  async getAllRecordsBytemplateId(templateId) {
    const query = 'SELECT * FROM Records WHERE templateId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [templateId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('템플릿 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 사용자가 가진 템플릿이 없습니다.'));
          return;
        }
        const records = results;
        // console.log(templates);
        resolve(records);
      });
    });
  }

  async getLastEditedTimeByRecordId(recordId) {
    const query = 'SELECT lastEditedTime FROM Records WHERE recordId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [recordId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('주기 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 템플릿이 없습니다.'));
          return;
        }
        const lastEditedTime = results[0];
        console.log(lastEditedTime);
        resolve(lastEditedTime);
      });
    });
  }

  async updateLastEditedTimeByRecordId(recordId) {
    const query = 'UPDATE Records SET lastEditedTime = CURRENT_TIMESTAMP() WHERE recordId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [recordId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('주기 정보를 가져오는데 실패했습니다.'));
          return;
        }
        resolve();
      });
    });
  }

  async getCreatedTimeByRecordId(recordId) {
    const query = 'SELECT createdTime FROM Records WHERE recordId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [recordId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('이름 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 템플릿이 없습니다.'));
          return;
        }
        const createdTime = results[0];
        console.log(createdTime);
        resolve(createdTime);
      });
    });
  }

  async getAllRecordedDate() {
    const query = 'SELECT DISTINCT DATE_FORMAT(createdTime, \'%Y-%m-%d\') AS uniqueDates FROM Records';
    return new Promise((resolve, reject) => {
      db.execute(query, (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('생성된 시간들의 목록을 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('기록이 생성된 시간이 없습니다.'));
          return;
        }
        
        const createdTimes = results.map((row) => row.uniqueDates);
        console.log("This is createdTimes : " + createdTimes);
        resolve(createdTimes);
      });
    });
  }
}

module.exports = RecordDA;
