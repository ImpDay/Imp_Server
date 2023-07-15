// services/userService.js

const UserDA = require('../db/userDA');

const userDA = new UserDA();

class UserService {
  // 모든 사용자 정보 가져오기
  async getAllUsers() {
    try {
      const users = await userDA.getAllUsers();
      return users;
    } catch (error) {
      throw new Error('사용자 정보를 가져오는데 실패 UserService.');
    }
  }
}

module.exports = UserService;
