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

  async signup(loginId, password, nickname) {
    try {
      var userData;
      userData.userId = loginId;
      userData.password = password;
      userData.nickname = nickname;
      userData.profileImagePath = "";
      const userId = await userDA.createUser(userData);
      return userId;
    } catch (error) {
      throw new Error('사용자 생성에 실패했습니다.');
    }
  }

  async login(loginId, password) {
    try {
      console.log("This is loginID : " + loginId);
      const user = await userDA.getUserByLoginIdAndPassword(loginId, password);
      
      return user;
    } catch (error) {
      throw new Error('사용자 정보를 가져오는데 실패 UserService.');
    }
  }

  async createUser(userData){
    try {
      const userId = await userDA.createUser(userData);
      return userId;
    } catch (error) {
      throw new Error('사용자 생성에 실패했습니다.');
    }
  }

  async deleteUser(id){
    try {
      await userDA.deleteUser(id);
    } catch (error) {
      throw new Error('User 삭제에 실패하였습니다.(UserService)');
    }
  }

  async getUserById(id) {
    try {
      const user = await userDA.getUserById(id);
      return user;
    } catch (error) {
      throw new Error('사용자 정보를 가져오는데 실패하였습니다. (UserService)');
    }
  }

  async getUserNicknameById(id) {
    try {
      const user = await userDA.getUserNicknameById(id);
      return user;
    } catch (error) {
      throw new Error('사용자 정보를 가져오는데 실패하였습니다. (UserService)');
    }
  }
}

module.exports = UserService;
