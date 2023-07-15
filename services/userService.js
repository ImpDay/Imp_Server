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

  async createUser(userData){
    try {
        console.log("여기까지도 잘와")
      const userId = await userDA.createUser(userData);
      return userId;
    } catch (error) {
      throw new Error('사용자 생성에 실패했습니다.');
    }
  }
}

module.exports = UserService;
