// services/userService.js

const TemplateDA = require('../db/templateDA');

const templateDA = new TemplateDA();

class TemplateService {
  // 모든 사용자 정보 가져오기
  async getAllTemplates() {
    try {
      const templates = await templateDA.getAllTemplates();
      return templates;
    } catch (error) {
      throw new Error('모든 Template 정보를 가져오는데 실패하였습니다.(TemplateService)');
    }
  }

  async createTemplate(templateData){
    try {
      const templateId = await templateDA.createTemplate(templateData);
      return templateId;
    } catch (error) {
      throw new Error('Template 생성에 실패하였습니다.(TemplateService)');
    }
  }

  async getAllTemplatesByUserId(userId) {
    try {
      const templates = await templateDA.getAllTemplatesByUserId(userId);
      return templates;
    } catch (error) {
      throw new Error(userId + '의 모든 Template 정보를 가져오는데 실패하였습니다.(TemplateService)');
    }
  }

  async getPeriodByTemplateId(templateId) {
    try {
      const period = await templateDA.getPeriodByTemplateId(templateId);
      return period;
    } catch (error) {
      throw new Error(templateId + '의 주기 정보를 가져오는데 실패하였습니다.(TemplateService)');
    }
  }

  async updatePeriodByTemplateId(templateId, templateData) {
    try {
      await templateDA.updatePeriodByTemplateId(templateId, templateData);
    } catch (error) {
      throw new Error(templateId + '의 주기 수정에 실패하였습니다.(TemplateService)');
    }
  }

  async getLeftDayByTemplateId(templateId) {
    try {
      
      const lastRecordedTime = await templateDA.getLastRecordedTimeByTemplateId(templateId);
      const period = await templateDA.getPeriodByTemplateId(templateId);
      
      const timestampDate = new Date(lastRecordedTime.lastRecordedTime);

      // 현재 날짜를 나타내는 JavaScript의 Date 객체 생성
      const currentDate = new Date();
      // const currentDate = new Date("2023-07-22T08:04:47.000Z");

      // 날짜 값만 가져오기
      const timestampDateOnly = new Date(timestampDate.getFullYear(), timestampDate.getMonth(), timestampDate.getDate());
      const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

      // 일 수 차이 계산
      const timeDiff = Math.abs(currentDateOnly - timestampDateOnly);
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      console.log("Calculate Left Day");
      console.log("This is period : " + period.writePeriod);
      console.log("This is currentDateOnly : "+ currentDateOnly);
      console.log("This is timestampDateOnly : "+ timestampDateOnly);

      const leftDay = period.writePeriod - daysDiff;

      console.log("This is leftDay : " + leftDay);
      return leftDay;
    } catch (error) {
      throw new Error(templateId + '의 남은 일자 정보를 가져오는데 실패하였습니다.(TemplateService)');
    }
  }

  async getTemplateNameByTemplateId(templateId) {
    try {
      const templateName = await templateDA.getTemplateNameByTemplateId(templateId);
      return templateName;
    } catch (error) {
      throw new Error(templateId + '의 이름 정보를 가져오는데 실패하였습니다.(TemplateService)');
    }
  }

  async updateTemplateNameByTemplateId(templateId, templateData) {
    try {
      await templateDA.updateTemplateNameByTemplateId(templateId, templateData);
    } catch (error) {
      throw new Error(templateId + '의 이름 수정에 실패하였습니다.(TemplateService)');
    }
  }
}

module.exports = TemplateService;
