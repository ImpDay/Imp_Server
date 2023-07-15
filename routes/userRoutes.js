// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const userController = new UserController();

// 사용자 정보 가져오기
router.get('/', userController.getAllUsers);
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('This is userRoutes');
// });
module.exports = router;
