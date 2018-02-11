import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {
    user: null,
    status: 204
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
    }

  },
  actions: {
    getUser(state, payload) {
      //   state.commit('getUser', payload)
      axios
        .post("http://localhost:3000/login/", payload)
        .then(response => {
          const user = {
            userData: response.data,
            status: response.status
          }
          state.commit('getUser', user)
        })
        .catch(error => {
          console.log(error);
        });
    },
    destroy(state) {
      state.commit('destroy')
    }
  },
  getters: {
    getUser(state) {
      return state.status
    }
  }
})
