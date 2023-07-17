var express = require('express');
var router = express.Router();
const RecordController = require('../controllers/recordController');
const AnswerController = require('../controllers/answerController');
const recordController = new RecordController();
const answerController = new AnswerController();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 기록이 있는 모든 날짜 가져오기
router.get('/recordedDates', recordController.getAllRecordedDate);

// 특정 날짜의 점수 반환하기
router.get('/getScore', answerController.getDateScore);


module.exports = router;
