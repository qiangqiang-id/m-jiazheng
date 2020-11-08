import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: window.localStorage.getItem('userinfo')
  },
  mutations: {
    saveuserinfo (state, obj) {
      state.userinfo = obj
      window.localStorage.setItem('userinfo', state.userinfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
