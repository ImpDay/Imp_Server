// services/userService.js

const AnswerDA = require('../db/answerDA');
const RecordDA = require('../db/recordDA');

const answerDA = new AnswerDA();
const recordDA = new RecordDA();

class AnswerService {
  // 모든 사용자 정보 가져오기
  async getAllAnswers() {
    try {
      const questions = await answerDA.getAllAnswers();
      return questions;
    } catch (error) {
      throw new Error('모든 answer 정보를 가져오는데 실패하였습니다.(AnswerService)');
    }
  }

  async createAnswer(answerData){
    try {
      const createTimeObject = await recordDA.getCreatedTimeByRecordId(answerData.recordId);
      answerData.createdTime = createTimeObject.createdTime;
      console.log("This is CreatedTime : " + answerData.createdTime);
      const answerId = await answerDA.createAnswer(answerData);
      return answerId;
    } catch (error) {
      throw new Error('Answer 생성에 실패하였습니다.(AnswerService)');
    }
  }

  async deleteAnswer(answerId){
    try {
      await answerDA.deleteAnswer(answerId);
    } catch (error) {
      throw new Error('Answer 삭제에 실패하였습니다.(AnswerService)');
    }
  }

  async getAllAnwersByQuestionId(questionId) {
    try {
      const answers = await answerDA.getAllAnwersByQuestionId(questionId);
      return answers;
    } catch (error) {
      throw new Error(questionId + '의 모든 answer 정보를 가져오는데 실패하였습니다.(AnswerService)');
    }
  }

  async getAnswerByQuestionRecordId(questionId, recordId) {
    try {
      const answer = await answerDA.getAnswerByQuestionRecordId(questionId, recordId);
      return answer;
    } catch (error) {
      throw new Error(questionId + ", " + recordId + '의 answer 정보를 가져오는데 실패하였습니다.(AnswerService)');
    }
  }

  async updateAnswerByQuestionRecordId(questionId, recordId, answerData) {
    try {
      await answerDA.updateAnswerByQuestionRecordId(questionId, recordId, answerData);
    } catch (error) {
      throw new Error(questionId + ", " + recordId + '의 question content 정보를 업데이트하는데 실패하였습니다.(AnswerService)');
    }
  }

}

module.exports = AnswerService;
