// dao/userDao.js

const db = require('./db');

class AnswerDA {
    async getAllAnswers() {
        const query = 'SELECT * FROM Answers';
        return new Promise((resolve, reject) => {
            db.execute(query, (err, results) => {
            if (err) {
                console.log(error.message);
                reject(new Error('모든 응답 정보를 가져오는데 실패했습니다.'));
                return;
            }
            resolve(results);
            });
        });
    }


  async createAnswer(answerData) {
    const query = 'INSERT INTO Answers (answer, questionId, recordId, userId, createdTime) VALUES (?, ?, ?, ?, ?)';
    const values = [answerData.answer, answerData.questionId, answerData.recordId, answerData.userId, answerData.createdTime];
    return new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          reject(new Error('중복된 값이 있습니다!'));
          return;
        } else {
          console.log(err.message);
          reject(new Error('응답을 생성하는데 실패했습니다.'));
          return;
        }
      }
      console.log(results.insertId);
      resolve(results.insertId); // 생성된 템플릿의 ID 반환
      });
    });
  }

  async deleteAnswer(answerId) {
    const query = 'DELETE FROM Answers WHERE answerId = ?';
    const values = answerId;
    return new Promise((resolve, reject) => {
      db.execute(query, [values], (err, results) => {
      if (err) {
        console.log(err.message);
        reject(new Error('응답을 삭제하는데 실패했습니다.'));
        return;
      }
      resolve();
      });
    });
  }

  

  async getAllAnwersByQuestionId(questionId) {
    const query = 'SELECT * FROM Answers WHERE questionId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [questionId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('응답 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 질문에 응답이 없습니다.'));
          return;
        }
        const records = results;
        // console.log(templates);
        resolve(records);
      });
    });
  }

  async getAnswerByQuestionRecordId(questionId, recordId) {
    const query = 'SELECT answer FROM Answers WHERE questionId = ? AND recordId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [questionId, recordId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('응답 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 응답이 없습니다.'));
          return;
        }
        const answer = results[0];
        console.log(answer);
        resolve(answer);
      });
    });
  }

  async updateAnswerByQuestionRecordId(questionId, recordId, answerData) {
    const query = 'UPDATE Answers SET answer = ? WHERE questionId = ? AND recordId = ?';
    const values = [answerData.answer, questionId, recordId];
    return new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('응답 업데이트에 실패했습니다.'));
          return;
        }
        resolve();
      });
    });
  }

  async getAllUserAnwersByCreatedTime(date, userId) {
    const query = 'SELECT answer FROM Answers WHERE DATE_FORMAT(createdTime, \'%Y-%m-%d\') = ? AND userId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [date, userId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('응답 정보를 가져오는데 실패했습니다.'));
          return;
        }
        // const answers = results;
        const answers = results.map((row) => row.answer);
        
        console.log("This is all answer : " + answers);
        resolve(answers);
      });
    });
  }

}

module.exports = AnswerDA;
