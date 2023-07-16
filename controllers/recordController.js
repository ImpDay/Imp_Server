// controllers/userController.js

const RecordService = require('../services/recordService');

const recordService = new RecordService();

class RecordController {
  // 모든 사용자 정보 가져오기
  async getAllRecords(req, res) {
    try {
      const records = await recordService.getAllRecords();
      res.status(200).json(records);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }

  async createRecord(req, res) {
    try {
      const recordData = req.body;
    //   console.log(recordData);
      const recordId = await recordService.createRecord(recordData);
      res.status(201).json({ recordId: recordId });
    } catch (error) {
      res.status(500).send('Record 생성에 실패했습니다.');
    }
  }

  async deleteRecord(req, res) {
    try {
      const recordId = req.params.recordId;
      console.log("This is recordId : " + recordId);
      await recordService.deleteRecord(recordId);
      res.status(204).end();
    } catch (error) {
      res.status(500).send('Record 가져오기에 실패했습니다.');
    }
  }


  async getAllRecordsBytemplateId(req, res) {
    try {
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      const records = await recordService.getAllRecordsBytemplateId(templateId);
      res.status(200).json(records);
    } catch (error) {
      res.status(500).send('Record 가져오기에 실패했습니다.');
    }
  }

  async getLastEditedTimeByRecordId(req, res) {
    try {
      const recordId = req.params.recordId;
      console.log("This is recordId : " + recordId);
      const lastEditedTime = await recordService.getLastEditedTimeByRecordId(recordId);
      res.status(200).json(lastEditedTime);
    } catch (error) {
      res.status(500).send('템플릿 주기 가져오기에 실패했습니다.');
    }
  }

  async updateLastEditedTimeByRecordId(req, res) {
    try {
      const recordId = req.params.recordId;
      console.log("This is recordId : " + recordId);
      await recordService.updateLastEditedTimeByRecordId(recordId);
      res.status(200).end();
    } catch (error) {
      res.status(500).send('템플릿 주기 가져오기에 실패했습니다.');
    }
  }

  async getCreatedTimeByRecordId(req, res) {
    try {
      const recordId = req.params.recordId;
      console.log("This is recordId : " + recordId);
      const createdTime = await recordService.getCreatedTimeByRecordId(recordId);
      res.status(200).json(createdTime);
    } catch (error) {
      res.status(500).send('템플릿 가져오기에 실패했습니다.');
    }
  }
}

module.exports = RecordController;
