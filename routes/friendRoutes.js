const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/friendController');

const friendController = new FriendController();

// 모든 친구 정보 가져오기
router.get('/', friendController.getAllFriends);

// 친구 관계 생성하기
router.post('/', friendController.createFriends);

// 특정 user간의 친구 관계 지우기
router.delete('/', friendController.deleteFriend);

// 특정 user간의 친구 관계 지우기
router.delete('/follow', friendController.deleteFollow);

// 친구 관계 생성하기
router.post('/follow', friendController.addFollow);

// 특정 user의 친구 목록 가져오기
router.get('/friends', friendController.getAllFriendsByUserId);

// 특정 user의 follower 가져오기
router.get('/followers', friendController.getAllFollowersByUserId);

module.exports = router;
