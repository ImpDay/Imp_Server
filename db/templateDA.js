// dao/userDao.js

const db = require('./db');

class TemplateDA {
    async getAllTemplates() {
        const query = 'SELECT * FROM Templates';
        return new Promise((resolve, reject) => {
            db.execute(query, (err, results) => {
            if (err) {
                console.log(error.message);
                reject(new Error('모든 템플릿 정보를 가져오는데 실패했습니다.'));
                return;
            }
            resolve(results);
            });
        });
    }

  async createTemplate(templateData) {
    const query = 'INSERT INTO Templates (userId, templateName, writePeriod) VALUES (?, ?, ?)';
    const values = [templateData.userId, templateData.templateName, templateData.writePeriod];
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

  async getAllTemplatesByUserId(userId) {
    const query = 'SELECT * FROM Templates WHERE userId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [userId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('템플릿 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 사용자가 가진 템플릿이 없습니다.'));
          return;
        }
        const templates = results;
        // console.log(templates);
        resolve(templates);
      });
    });
  }

  async getPeriodByTemplateId(templateId) {
    const query = 'SELECT writePeriod FROM Templates WHERE templateId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [templateId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('주기 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 템플릿이 없습니다.'));
          return;
        }
        const period = results[0];
        console.log(period);
        resolve(period);
      });
    });
  }

  async updatePeriodByTemplateId(templateId, templateData) {
    const query = 'UPDATE Templates SET writePeriod = ? WHERE templateId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [templateData.period, templateId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('이름 정보 수정에 실패했습니다.'));
          return;
        }
        resolve();
      });
    });
  }

  async getTemplateNameByTemplateId(templateId) {
    const query = 'SELECT templateName FROM Templates WHERE templateId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [templateId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('이름 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 템플릿이 없습니다.'));
          return;
        }
        const templateName = results[0];
        console.log(templateName);
        resolve(templateName);
      });
    });
  }

  async updateTemplateNameByTemplateId(templateId, templateData) {
    const query = 'UPDATE Templates SET templateName = ? WHERE templateId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [templateData.templateName, templateId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('이름 정보 수정에 실패했습니다.'));
          return;
        }
        resolve();
      });
    });
  }

  async updateLastRecordedTimeByTemplateId(templateId) {
    const query = 'UPDATE Templates SET lastRecordedTime = CURRENT_TIMESTAMP() WHERE templateId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [templateId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('마지막 기록 시간 수정에 실패했습니다.'));
          return;
        }
        resolve();
      });
    });
  }
}

module.exports = TemplateDA;
