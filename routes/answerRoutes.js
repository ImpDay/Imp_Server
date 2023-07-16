const express = require('express');
const router = express.Router();
const AnswerController = require('../controllers/answerController');

const answerController = new AnswerController();

// 모든 answer 정보 가져오기
router.get('/', answerController.getAllAnswers);

// answer 생성하기
router.post('/', answerController.createAnswer);

// answer 지우기
router.delete('/:answerId', answerController.deleteAnswer);

// questionId로 answer 모두 가져오기
router.get('/:questionId', answerController.getAllAnwersByQuestionId);

// questionId와 recordId로 answer 가져오기
router.get('/:questionId/:recordId/answer', answerController.getAnswerByQuestionRecordId);

// questionId와 recordId로 answer 수정하기
router.put('/:questionId/:recordId/answer', answerController.updateAnswerByQuestionRecordId);

module.exports = router;
