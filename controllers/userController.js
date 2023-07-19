// controllers/userController.js

const UserService = require('../services/userService');

const userService = new UserService();

class UserController {
  // 모든 사용자 정보 가져오기
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }

  async signup(req, res) {
    try {
      const { loginId, password, nickname } = req.body;
      await userService.signup(loginId, password, nickname);
      res.status(201).json({ message: '회원 가입이 완료되었습니다.' });
    } catch (error) {
      res.status(500).json({ error: '회원 가입에 실패했습니다.' });
    }
  } 

  async login(req, res) {
    try {
      const { loginId, password } = req.body;
      const user = await userService.login(loginId, password);
      console.log("This is User : " + user.id);
      req.session.userId = user.id; // 세션에 사용자 ID 저장
      const userId = user.id;
      res.status(200).json(userId);
    } catch (error) {
      res.status(401).json({ error: '로그인에 실패했습니다.' });
    }
  } 


  async createUser(req, res) {
    try {
      const userData = req.body;
      const userIntId = await userService.createUser(userData);
      res.status(201).json({ id: userIntId });
    } catch (error) {
      res.status(500).send('사용자 생성에 실패했습니다.');
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      console.log("This is id : " + id);
      await userService.deleteUser(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).send('User 삭제에 실패했습니다.');
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
      const id = req.session.userId;
      console.log("This is id : " + id);
      const user = await userService.getUserNicknameById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send('사용자 가져오기에 실패했습니다.');
    }
  }

  async getFriendNicknameById(req, res) {
    try {
      const id = req.query.friendId;
      console.log("This is id : " + id);
      const user = await userService.getUserNicknameById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send('사용자 가져오기에 실패했습니다.');
    }
  }

}

module.exports = UserController;
