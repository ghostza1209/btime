import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)


export const store = new Vuex.Store({
  strict: true,
  state: {
    user: null,
    error: null,
    token: null,
    isLogin: false
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      state.isLogin = true
    },
    destroy(state) {
      state.user = null,
        state.isLogin = false
      window.location.href = "/"
    },
    hasErr(state, err) {
      state.error = err
    }
  },
  actions: {
    async getUser({
      commit
    }, payload) {
      const response = await axios
        .post("http://localhost:3000/login", payload)
        .then(response => {

          if (response.data.error) {
            const err = response.data.error
            commit('hasErr', err)
          } else {
            const user = {
              username: response.data.username,
              password: response.data.password
            }
            commit('setUser', user)
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    destroy({
      commit
    }) {
      commit('destroy')
    }
  },
  getters: {
    getIslogin(state) {
      return state.isLogin
    },
    getErr(state){
      return state.error
    }
  }
})
