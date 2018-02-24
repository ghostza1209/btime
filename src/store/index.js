import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'


Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    isLogin: false,
    username: "",
    type: 0,
    _id: ""
  },
  mutations: {
    isLogin(state, data) {
      state.isLogin = data.auth,
        state.username = data.username,
        state.type = data.type,
        state._id = data._id
    },
    logout(state) {
      state.isLogin = false,
        state.username = "",
        state.type = "",
        state._id = ""
    }
  },
  actions: {
    isLogin({
      commit
    }, payload) {
      commit('isLogin', payload)
    },
    logout({
      commit
    }) {
      commit('logout')
    }
  },
  getters: {
    getIsLogin(state) {
      return state.isLogin
    },
    getUsername(state) {
      return state.username
    },
    getType(state) {
      return state.type
    },
    getId(state) {
      return state._id
    }

  }
})
