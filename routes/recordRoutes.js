const express = require('express');
const router = express.Router();
const RecordController = require('../controllers/recordController');

const recordController = new RecordController();

// 모든 records 정보 가져오기
router.get('/', recordController.getAllRecords);

// record 생성하기
router.post('/', recordController.createRecord);

// record 지우기
router.delete('/:recordId', recordController.deleteRecord);

// templateId로 record 모두 가져오기
router.get('/:templateId', recordController.getAllRecordsBytemplateId);

// recordId로 lastEditedTime 가져오기
router.get('/:recordId/lastEditedTime', recordController.getLastEditedTimeByRecordId);

// recordId로 lastEditedTime 수정하기
router.put('/:recordId/lastEditedTime', recordController.updateLastEditedTimeByRecordId);

// recordId로 createdTime 가져오기
router.get('/:recordId/createdTime', recordController.getCreatedTimeByRecordId);



module.exports = router;
