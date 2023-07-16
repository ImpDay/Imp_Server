// controllers/userController.js

const QuestionService = require('../services/questionService');

const questionService = new QuestionService();

class QuestionController {
  // 모든 사용자 정보 가져오기
  async getAllQuestions(req, res) {
    try {
      const questions = await questionService.getAllQuestions();
      res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }

  async createQuestion(req, res) {
    try {
      const questionData = req.body;
      const questionId = await questionService.createQuestion(questionData);
      res.status(201).json({ questionId: questionId });
    } catch (error) {
      res.status(500).send('Record 생성에 실패했습니다.');
    }
  }

  async deleteQuestion(req, res) {
    try {
      const questionId = req.params.questionId;
      console.log("This is questionId : " + questionId);
      await questionService.deleteQuestion(questionId);
      res.status(204).end();
    } catch (error) {
      res.status(500).send('Question 가져오기에 실패했습니다.');
    }
  }


  async getAllQuestionsBytemplateId(req, res) {
    try {
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      const questions = await questionService.getAllQuestionsBytemplateId(templateId);
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).send('Record 가져오기에 실패했습니다.');
    }
  }

  async getQuestionContentByQuestionId(req, res) {
    try {
      const questionId = req.params.questionId;
      console.log("This is questionId : " + questionId);
      const questionContent = await questionService.getQuestionContentByQuestionId(questionId);
      res.status(200).json(questionContent);
    } catch (error) {
      res.status(500).send('템플릿 주기 가져오기에 실패했습니다.');
    }
  }

  async updateQuestionContentByQuestionId(req, res) {
    try {
      const questionData = req.body;
      const questionId = req.params.questionId;
      await questionService.updateQuestionContentByQuestionId(questionId, questionData);
      res.status(200).end();
    } catch (error) {
      res.status(500).send('questionContent update에 실패했습니다.');
    }
  }

  async getAnswerTypeByQuestionId(req, res) {
    try {
      const questionId = req.params.questionId;
      console.log("This is questionId : " + questionId);
      const answerType = await questionService.getAnswerTypeByQuestionId(questionId);
      res.status(200).json(answerType);
    } catch (error) {
      res.status(500).send('템플릿 주기 가져오기에 실패했습니다.');
    }
  }

  async updateAnswerTypeByQuestionId(req, res) {
    try {
      const questionData = req.body;
      const questionId = req.params.questionId;
      await questionService.updateAnswerTypeByQuestionId(questionId, questionData);
      res.status(200).end();
    } catch (error) {
      res.status(500).send('questionContent update에 실패했습니다.');
    }
  }
}

module.exports = QuestionController;
