// services/userService.js

const FriendDA = require('../db/friendDA');

const friendDA = new FriendDA();

class FriendService {
  // 모든 사용자 정보 가져오기
  async getAllFriends() {
    try {
      const friends = await friendDA.getAllFriends();
      return friends;
    } catch (error) {
      throw new Error('모든 answer 정보를 가져오는데 실패하였습니다.(FriendService)');
    }
  }

  async createFriends(friendData){
    try {
      // if(friendData.userId1 > friendData.userId2){
      //   const temp = friendData.userId1;
      //   friendData.userId1 = friendData.userId2;
      //   friendData.userId2 = temp;
      // }
      const friendId = await friendDA.createFriends(friendData);
      return friendId;
    } catch (error) {
      throw new Error('친구관계 생성에 실패하였습니다.(FriendService)');
    }
  }

  async deleteFriend(friendData){
    try {
      // if(friendData.userId1 > friendData.userId2){
      //   const temp = friendData.userId1;
      //   friendData.userId1 = friendData.userId2;
      //   friendData.userId2 = temp;
      // }
      await friendDA.deleteFriend(friendData);
    } catch (error) {
      throw new Error('친구 관계 삭제에 실패하였습니다.(FriendService)');
    }
  }

  async getAllFriendsByUserId(userId) {
    try {
      const friends = await friendDA.getAllFriendsByUserId(userId);
      return friends;
    } catch (error) {
      throw new Error(userId + '의 모든 친구 정보를 가져오는데 실패하였습니다.(FriendService)');
    }
  }

  async getAllFollowersByUserId(userId) {
    try {
      const followers = await friendDA.getAllFollowersByUserId(userId);
      return followers;
    } catch (error) {
      throw new Error(userId + '의 모든 친구 정보를 가져오는데 실패하였습니다.(FriendService)');
    }
  }

}

module.exports = FriendService;
