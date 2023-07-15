// controllers/userController.js

const UserService = require('../services/userService');

const userService = new UserService();

class UserController {
  // 모든 사용자 정보 가져오기
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }
}

module.exports = UserController;
