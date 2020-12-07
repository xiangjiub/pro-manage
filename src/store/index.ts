import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    user: localStorage.getItem('user') || '',
    token: localStorage.getItem('token') || null
  },
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
  },
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin,
  },
  actions: {
    //获取登录状态
    setUser({ commit }, flag) {
      commit("userStatus", flag)
    },
  },
  modules: {

  }
})
