// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const userController = new UserController();

// 사용자 정보 가져오기
router.get('/', userController.getAllUsers);

// 사용자 추가하기
router.post('/', userController.createUser);

// id로 user 객체 가져오기
// router.get('/:id', userController.getUserById);

// // userId로 user 객체 가져오기
// router.get('/:userId', userController.getUserByUserId);

// // id로 user nickname 가져오기
// router.get('/:id', userController.getUserNicknameById);

// // userId로 nickname 가져오기
// router.get('/:userId', userController.getUserByUserId);

module.exports = router;
