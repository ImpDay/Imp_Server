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

  async getTemplateNameByTemplateId(templateId) {
    try {
      const templateName = await templateDA.getTemplateNameByTemplateId(templateId);
      return templateName;
    } catch (error) {
      throw new Error(templateId + '의 이름 정보를 가져오는데 실패하였습니다.(TemplateService)');
    }
  }
}

module.exports = TemplateService;
