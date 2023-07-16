// dao/userDao.js

const db = require('./db');

class QuestionDA {
    async getAllQuestions() {
        const query = 'SELECT * FROM Questions';
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


  async createQuestion(questionData) {
    const query = 'INSERT INTO Questions (questionContent, answerType, templateId) VALUES (?, ?, ?)';
    const values = [questionData.questionContent, questionData.answerType, questionData.templateId];
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

  async deleteQuestion(questionId) {
    const query = 'DELETE FROM Questions WHERE questionId = ?';
    const values = questionId;
    return new Promise((resolve, reject) => {
      db.execute(query, [values], (err, results) => {
      if (err) {
        console.log(err.message);
        reject(new Error('질문을 삭제하는데 실패했습니다.'));
        return;
      }
      resolve();
      });
    });
  }

  

  async getAllQuestionsBytemplateId(templateId) {
    const query = 'SELECT * FROM Questions WHERE templateId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [templateId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('질문 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 사용자가 가진 질문이 없습니다.'));
          return;
        }
        const records = results;
        // console.log(templates);
        resolve(records);
      });
    });
  }

  async getQuestionContentByQuestionId(questionId) {
    const query = 'SELECT questionContent FROM Questions WHERE questionId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [questionId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('질문 콘텐츠 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 질문이 없습니다.'));
          return;
        }
        const questionContent = results[0];
        console.log(questionContent);
        resolve(questionContent);
      });
    });
  }

  async updateQuestionContentByQuestionId(questionId, questionData) {
    const query = 'UPDATE Questions SET questionContent = ? WHERE questionId = ?';
    const values = [questionData.questionContent, questionId];
    return new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('질문 콘텐츠 업데이트에 실패했습니다.'));
          return;
        }
        resolve();
      });
    });
  }

  async getAnswerTypeByQuestionId(questionId) {
    const query = 'SELECT answerType FROM Questions WHERE questionId = ?';
    return new Promise((resolve, reject) => {
      db.execute(query, [questionId], (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('질문 타입 정보를 가져오는데 실패했습니다.'));
          return;
        }
        if (results.length === 0) {
          reject(new Error('해당 id를 가진 질문이 없습니다.'));
          return;
        }
        const answerType = results[0];
        resolve(answerType);
      });
    });
  }

  async updateAnswerTypeByQuestionId(questionId, questionData) {
    const query = 'UPDATE Questions SET answerType = ? WHERE questionId = ?';
    const values = [questionData.answerType, questionId];
    console.log("This is new answerType : " + questionData.answerType);
    return new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
        if (err) {
          console.log(err.message);
          reject(new Error('질문 타입 업데이트에 실패했습니다.'));
          return;
        }
        resolve();
      });
    });
  }

}

module.exports = QuestionDA;
