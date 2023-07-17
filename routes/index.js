var express = require('express');
var router = express.Router();
const RecordController = require('../controllers/recordController');
const recordController = new RecordController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 기록이 있는 모든 날짜 가져오기
router.get('/recordedDates', recordController.getAllRecordedDate);

module.exports = router;
