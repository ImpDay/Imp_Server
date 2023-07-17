// services/userService.js

const RecordDA = require('../db/recordDA');

const recordDA = new RecordDA();

class RecordService {
  // 모든 사용자 정보 가져오기
  async getAllRecords() {
    try {
      const records = await recordDA.getAllRecords();
      return records;
    } catch (error) {
      throw new Error('모든 record 정보를 가져오는데 실패하였습니다.(RecordService)');
    }
  }

  async createRecord(recordData){
    try {
      const recordId = await recordDA.createRecord(recordData);
      return recordId;
    } catch (error) {
      throw new Error('record 생성에 실패하였습니다.(RecordService)');
    }
  }

  async deleteRecord(recordId){
    try {
      await recordDA.deleteRecord(recordId);
    } catch (error) {
      throw new Error('record 삭제에 실패하였습니다.(RecordService)');
    }
  }

  async getAllRecordsBytemplateId(templateId) {
    try {
      const records = await recordDA.getAllRecordsBytemplateId(templateId);
      return records;
    } catch (error) {
      throw new Error(templateId + '의 모든 record 정보를 가져오는데 실패하였습니다.(RecordService)');
    }
  }

  async getLastEditedTimeByRecordId(recordId) {
    try {
      const lastEditedTime = await recordDA.getLastEditedTimeByRecordId(recordId);
      return lastEditedTime;
    } catch (error) {
      throw new Error(recordId + '의 lastEditedTime 정보를 가져오는데 실패하였습니다.(RecordService)');
    }
  }

  async updateLastEditedTimeByRecordId(recordId) {
    try {
      await recordDA.updateLastEditedTimeByRecordId(recordId);
    } catch (error) {
      throw new Error(recordId + '의 lastEditedTime 정보를 가져오는데 실패하였습니다.(RecordService)');
    }
  }

  async getCreatedTimeByRecordId(recordId) {
    try {
      const createdTime = await recordDA.getCreatedTimeByRecordId(recordId);
      return createdTime;
    } catch (error) {
      throw new Error(recordId + '의 createdTime 정보를 가져오는데 실패하였습니다.(RecordService)');
    }
  }

  async getAllRecordedDate() {
    try {
      const createdTimes = await recordDA.getAllRecordedDate();
      return createdTimes;
    } catch (error) {
      throw new Error('createdTimes 정보를 가져오는데 실패하였습니다.(RecordService)');
    }
  }
}

module.exports = RecordService;
