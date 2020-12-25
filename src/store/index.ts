import { createStore } from 'vuex'
import getters from "@/store/getters";
import modules from '@/store/modules/index'

export default createStore({
  //state: {
    // isLogin: false,
    // user: localStorage.getItem('user') || '',
    // token: localStorage.getItem('token') || null
  //},
  // mutations: {
  //   //保存登录状态
  //   userStatus(state, flag) {
  //     state.isLogin = flag
  //   },
  //   LOGIN:(state,data) => {
  //     console.log('login方法');
  //     state.user = data.user;
  //     state.token = data.token;
  //   }
  // },
  state: {
    testName: 'hello'
  },
  mutations: {
    setTestName(state, name) {
      state.testName = name
    }
  },
  actions: {
  },
  modules,
  getters,
  // getters: {
  //   //获取登录状态
  //   isLogin: state => state.isLogin,
  // },
  // actions: {
  //   //获取登录状态
  //   setUser({ commit }, flag) {
  //     commit("userStatus", flag)
  //   },
  // },
  // modules: {

  // }
})
