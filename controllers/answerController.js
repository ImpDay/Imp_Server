// controllers/userController.js

const AnswerService = require('../services/answerService');

const answerService = new AnswerService();

class AnswerController {
  // 모든 사용자 정보 가져오기
  async getAllAnswers(req, res) {
    try {
      const answers = await answerService.getAllAnswers();
      res.status(200).json(answers);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }

  async createAnswer(req, res) {
    try {
      const answerData = req.body;
      const answerId = await answerService.createAnswer(answerData);
      res.status(201).json({ answerId: answerId });
    } catch (error) {
      res.status(500).send('Answer 생성에 실패했습니다.');
    }
  }

  async deleteAnswer(req, res) {
    try {
      const answerId = req.params.answerId;
      console.log("This is answerId : " + answerId);
      await answerService.deleteAnswer(answerId);
      res.status(204).end();
    } catch (error) {
      res.status(500).send('answer 가져오기에 실패했습니다.');
    }
  }


  async getAllAnwersByQuestionId(req, res) {
    try {
      const questionId = req.params.questionId;
      console.log("This is questionId : " + questionId);
      const answers = await answerService.getAllAnwersByQuestionId(questionId);
      res.status(200).json(answers);
    } catch (error) {
      res.status(500).send('Answer 가져오기에 실패했습니다.');
    }
  }

  async getAnswerByQuestionRecordId(req, res) {
    try {
      const questionId = req.params.questionId;
      const recordId = req.params.recordId;
      const answer = await answerService.getAnswerByQuestionRecordId(questionId, recordId);
      res.status(200).json(answer);
    } catch (error) {
      res.status(500).send('Answer 가져오기에 실패했습니다.');
    }
  }

  async updateAnswerByQuestionRecordId(req, res) {
    try {
      const answerData = req.body;
      const questionId = req.params.questionId;
      const recordId = req.params.recordId;
      await answerService.updateAnswerByQuestionRecordId(questionId, recordId, answerData);
      res.status(200).end();
    } catch (error) {
      res.status(500).send('Answer update에 실패했습니다.');
    }
  }

  async getDateScoreByUserId(req, res) {
    try {
      const date = req.query.date;
      const userId = req.query.userId;
      const answers = await answerService.getDateScoreByUserId(date, userId);
      res.status(200).json(answers);
    } catch (error) {
      res.status(500).send('점수 계산에 실패했습니다.');
    }
  }

}
module.exports = AnswerController;
