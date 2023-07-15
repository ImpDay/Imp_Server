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

  async createUser(req, res) {
        try {
            console.log("일단 여기까지는 들어옴");
            const userData = req.body;
            const userIntId = await userService.createUser(userData);
            res.status(201).json({ id: userIntId });
        } catch (error) {
            res.status(500).send('사용자 생성에 실패했습니다.');
        }
    }
}

module.exports = UserController;
