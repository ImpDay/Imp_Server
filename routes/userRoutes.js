// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const userController = new UserController();

// 사용자 정보 가져오기
router.get('/', userController.getAllUsers);

// 사용자 추가하기
router.post('/', userController.createUser);

// 사용자 지우기
router.delete('/:id', userController.deleteUser);

// id로 user 객체 가져오기
router.get('/:id', userController.getUserById);

// id로 user nickname 가져오기
router.get('/:id/nickname', userController.getUserNicknameById);

// id로 user profile 가져오기
// router.get('/:id/nickname', userController.getUserNicknameById);


module.exports = router;
