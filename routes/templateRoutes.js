const express = require('express');
const router = express.Router();
const TemplateController = require('../controllers/templateController');

const templateController = new TemplateController();

// 템플릿 정보 가져오기
router.get('/', templateController.getAllTemplates);

// id의 유저가 template 생성하기
router.post('/', templateController.createTemplate);

// id의 유저가 가진 template 모두 가져오기
router.get('/myTemplates', templateController.getAllTemplatesByUserId);

// templateId로 주기 가져오기
router.get('/:templateId/period', templateController.getPeriodByTemplateId);

// templateId로 주기 수정하기
router.put('/:templateId/period', templateController.updatePeriodByTemplateId);

// templateId로 남은 날짜 가져오기(당일이면 0, 하루 지났으면 -1 반환)
router.get('/:templateId/leftDay', templateController.getLeftDayByTemplateId);

// templateId로 평균 점수 반환하기
router.get('/:templateId/averageScore', templateController.getAverageScoreByTemplateId);


// templateId로 templateName 가져오기
router.get('/:templateId/templateName', templateController.getTemplateNameByTemplateId);

// templateId로 templateName 수정하기
router.put('/:templateId/templateName', templateController.updateTemplateNameByTemplateId);

module.exports = router;
