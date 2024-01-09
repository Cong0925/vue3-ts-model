// 在 src/store/index.js 中创建一个简单的 store
import { defineStore } from 'pinia'
import { UserInfoState } from "./interface/index"

interface State {
  userForm: UserInfoState;
}

export const useMyStore = defineStore('myStore', {
  state: (): State => ({
    userForm: {
      user: '',
      ID: '',
      age: '',
      sex: ''
    },
    // 其他状态
  }),
  actions: {
    // 动作
    setUserInfo(data:UserInfoState) {
      this.userForm = data
    },

  },
})