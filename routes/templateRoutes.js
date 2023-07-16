const express = require('express');
const router = express.Router();
const TemplateController = require('../controllers/templateController');

const templateController = new TemplateController();

// TODO : 템플릿 정보 가져오기
router.get('/', templateController.getAllTemplates);

// TODO : id의 유저가 template 생성하기
router.post('/', templateController.createTemplate);

// TODO : id의 유저가 가진 template 모두 가져오기
router.get('/:id', templateController.getAllTemplatesByUserId);

// TODO : templateId로 주기 가져오기
router.get('/:templateId/period', templateController.getPeriodByTemplateId);

// TODO : templateId로 templateName 가져오기
router.get('/:templateId/templateName', templateController.getTemplateNameByTemplateId);

module.exports = router;
