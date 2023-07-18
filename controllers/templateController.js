// controllers/userController.js

const TemplateService = require('../services/templateService');

const templateService = new TemplateService();

class TemplateController {
  // 모든 사용자 정보 가져오기
  async getAllTemplates(req, res) {
    try {
      const templates = await templateService.getAllTemplates();
      res.status(200).json(templates);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }

  async createTemplate(req, res) {
    try {
      
      const templateData = req.body;
      console.log(templateData);
      const templateId = await templateService.createTemplate(templateData);
      res.status(201).json({ templateId: templateId });
    } catch (error) {
      res.status(500).send('템플릿 생성에 실패했습니다.');
    }
  }

  async getAllTemplatesByUserId(req, res) {
    try {
      const userId = req.session.userId;
      console.log("This is useruserid : " + userId);
      const templates = await templateService.getAllTemplatesByUserId(userId);
      res.status(200).json(templates);
    } catch (error) {
      res.status(500).send('템플릿 가져오기에 실패했습니다.');
    }
  }

  async getPeriodByTemplateId(req, res) {
    try {
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      const period = await templateService.getPeriodByTemplateId(templateId);
      res.status(200).json(period);
    } catch (error) {
      res.status(500).send('템플릿 주기 가져오기에 실패했습니다.');
    }
  }

  async updatePeriodByTemplateId(req, res) {
    try {
      const templateData = req.body;
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      await templateService.updatePeriodByTemplateId(templateId, templateData);
      res.status(200).end();
    } catch (error) {
      res.status(500).send('Template period 수정에 실패했습니다.');
    }
  }

  async getLeftDayByTemplateId(req, res) {
    try {
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      const period = await templateService.getLeftDayByTemplateId(templateId);
      res.status(200).json(period);
    } catch (error) {
      res.status(500).send('템플릿의 남은 시간 가져오기에 실패했습니다.');
    }
  }

  async getTemplateNameByTemplateId(req, res) {
    try {
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      const templateName = await templateService.getTemplateNameByTemplateId(templateId);
      res.status(200).json(templateName);
    } catch (error) {
      res.status(500).send('템플릿 가져오기에 실패했습니다.');
    }
  }

  async updateTemplateNameByTemplateId(req, res) {
    try {
      const templateData = req.body;
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      await templateService.updateTemplateNameByTemplateId(templateId, templateData);
      res.status(200).end();
    } catch (error) {
      res.status(500).send('Template Name 수정에 실패했습니다.');
    }
  }

  async getAverageScoreByTemplateId(req, res) {
    try {
      const templateId = req.params.templateId;
      console.log("This is templateId : " + templateId);
      const averageScore = await templateService.getAverageScoreByTemplateId(templateId);
      res.status(200).json(averageScore);
    } catch (error) {
      res.status(500).send('Template Name 수정에 실패했습니다.');
    }
  }
  
}

module.exports = TemplateController;
