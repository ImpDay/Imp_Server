// controllers/userController.js

const FriendService = require('../services/friendService');

const friendService = new FriendService();

class FriendController {
  // 모든 사용자 정보 가져오기
  async getAllFriends(req, res) {
    try {
      const friends = await friendService.getAllFriends();
      res.status(200).json(friends);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }

  async createFriends(req, res) {
    try {
      const friendData = req.body;
      const friendId = await friendService.createFriends(friendData);
      res.status(201).json({ friendId: friendId });
    } catch (error) {
      res.status(500).send('친구 관계 생성에 실패했습니다.');
    }
  }

  async deleteFriend(req, res) {
    try {
      const friendData = req.body;
      await friendService.deleteFriend(friendData);
      res.status(204).end();
    } catch (error) {
      res.status(500).send('friend 지우기에 실패했습니다.');
    }
  }


  async getAllFriendsByUserId(req, res) {
    try {
      const userId = req.session.userId;
      console.log("This is userId : " + userId);
      const friends = await friendService.getAllFriendsByUserId(userId);
      res.status(200).json(friends);
    } catch (error) {
      res.status(500).send('Answer 가져오기에 실패했습니다.');
    }
  }

  async getAllFollowersByUserId(req, res) {
    try {
      const userId = req.session.userId;
      console.log("This is userId : " + userId);
      const followers = await friendService.getAllFollowersByUserId(userId);
      res.status(200).json(followers);
    } catch (error) {
      res.status(500).send('Answer 가져오기에 실패했습니다.');
    }
  }


}
module.exports = FriendController;
