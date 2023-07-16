// controllers/userController.js

const UserService = require('../services/userService');

const userService = new UserService();

class UserController {
  // 모든 사용자 정보 가져오기
  async getAllTemplates(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }

  async createTemplate(req, res) {
    try {
      const userData = req.body;
      const userIntId = await userService.createUser(userData);
      res.status(201).json({ id: userIntId });
    } catch (error) {
      res.status(500).send('사용자 생성에 실패했습니다.');
    }
  }

  async getUserById(req, res) {
    try {
      const id = req.params.id;
      console.log("This is id : " + id);
      const user = await userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send('사용자 가져오기에 실패했습니다.');
    }
  }

  async getUserNicknameById(req, res) {
    try {
      const id = req.params.id;
      console.log("This is id : " + id);
      const user = await userService.getUserNicknameById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send('사용자 가져오기에 실패했습니다.');
    }
  }

}

module.exports = UserController;
