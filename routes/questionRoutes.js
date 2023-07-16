const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/questionController');

const questionController = new QuestionController();

// 모든 question 정보 가져오기
router.get('/', questionController.getAllQuestions);

// question 생성하기
router.post('/', questionController.createQuestion);

// question 지우기
router.delete('/:questionId', questionController.deleteQuestion);

// templateId로 quesiton 모두 가져오기
router.get('/:templateId', questionController.getAllQuestionsBytemplateId);

// questionId로 questionContent 가져오기
router.get('/:questionId/questionContent', questionController.getQuestionContentByQuestionId);

// questionId로 questionContent 수정하기
router.put('/:questionId/questionContent', questionController.updateQuestionContentByQuestionId);

// questionId로 answerType 가져오기
router.get('/:questionId/answerType', questionController.getAnswerTypeByQuestionId);

// questionId로 answerType 수정하기
router.put('/:questionId/answerType', questionController.updateAnswerTypeByQuestionId);

module.exports = router;
