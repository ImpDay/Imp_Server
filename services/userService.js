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

  async login(loginId, password) {
    try {
      const passwordData = await userDA.getPasswordByLoginId(loginId, password);
      console.log("This is passwordData : " + passwordData);
      if(password == passwordData.password){
        return true;
      }else{
        throw new Error('비밀번호가 틀립니다');
      }
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
