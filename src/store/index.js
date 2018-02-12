import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    user: null,
    status: 204,
    error: false
  },
  mutations: {
    getUser(state, data) {
      state.user = data.userData
      state.status = data.status
      // console.log(state.user,state.status)
    },
    destroy(state) {
      state.user = null
      state.status = 204
      window.location.href= "/"
    },
    checkLogin(state){
      if(state.user != "" && state.status == 204){
        state.error = true
      }else{
        state.error = false
      }
    }
  },
  actions: {
    getUser(state, payload) {
      axios
        .post("http://localhost:3000/login/", payload)
        .then(response => {
          console.log(response)
          if(response.data.status == 204){
            var status = response.data.status = 204
          }else{
            var status = response.status
          }
          const user = {
            userData: response.data,
            status: status
          }
          console.log(user)
          state.commit('getUser', user)
        })
        .catch(error => {
          console.log(error);
        });
    },
    destroy(state) {
      state.commit('destroy')
    },
    checkLogin(state){
      state.commit('checkLogin')
    }
  },
  getters: {
    getUser(state) {
      return state.status
    },
    getError(state){
      return state.error
    }
  }
})
