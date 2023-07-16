// services/userService.js

const QuestionDA = require('../db/questionDA');

const questionDA = new QuestionDA();

class QuestionService {
  // 모든 사용자 정보 가져오기
  async getAllQuestions() {
    try {
      const questions = await questionDA.getAllQuestions();
      return questions;
    } catch (error) {
      throw new Error('모든 question 정보를 가져오는데 실패하였습니다.(QuestionService)');
    }
  }

  async createQuestion(questionData){
    try {
      const questionId = await questionDA.createQuestion(questionData);
      return questionId;
    } catch (error) {
      throw new Error('question 생성에 실패하였습니다.(QuestionService)');
    }
  }

  async deleteQuestion(questionId){
    try {
      await questionDA.deleteQuestion(questionId);
    } catch (error) {
      throw new Error('question 삭제에 실패하였습니다.(QuestionService)');
    }
  }

  async getAllQuestionsBytemplateId(templateId) {
    try {
      const questions = await questionDA.getAllQuestionsBytemplateId(templateId);
      return questions;
    } catch (error) {
      throw new Error(questions + '의 모든 question 정보를 가져오는데 실패하였습니다.(QuestionService)');
    }
  }

  async getQuestionContentByQuestionId(questionId) {
    try {
      const questionContent = await questionDA.getQuestionContentByQuestionId(questionId);
      return questionContent;
    } catch (error) {
      throw new Error(questionId + '의 question content 정보를 가져오는데 실패하였습니다.(QuestionService)');
    }
  }

  async updateQuestionContentByQuestionId(questionId, questionData) {
    try {
      await questionDA.updateQuestionContentByQuestionId(questionId, questionData);
    } catch (error) {
      throw new Error(questionId + '의 question content 정보를 업데이트하는데 실패하였습니다.(QuestionService)');
    }
  }

  async getAnswerTypeByQuestionId(questionId) {
    try {
      const answerType = await questionDA.getAnswerTypeByQuestionId(questionId);
      return answerType;
    } catch (error) {
      throw new Error(questionId + '의 question content 정보를 가져오는데 실패하였습니다.(QuestionService)');
    }
  }

  async updateAnswerTypeByQuestionId(questionId, questionData) {
    try {
      await questionDA.updateAnswerTypeByQuestionId(questionId, questionData);
    } catch (error) {
      throw new Error(questionId + '의 answer type 정보를 업데이트하는데 실패하였습니다.(QuestionService)');
    }
  }
}

module.exports = QuestionService;
