
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: window.localStorage.getItem('userinfo'),
    company: JSON.parse(localStorage.getItem('companyData')),
    housekeeping: JSON.parse(localStorage.getItem('housekeepingData'))
  },
  mutations: {
    saveuserinfo (state, obj) {
      state.userinfo = obj
      window.localStorage.setItem('userinfo', state.userinfo)
    },
    setCompany (state, data) {
      state.company = data
      window.localStorage.setItem('companyData', JSON.stringify(state.company))
    },
    setHousekeeping (state, data) {
      state.housekeeping = data
      window.localStorage.setItem('housekeepingData', JSON.stringify(state.housekeeping))
    }

  },
  actions: {
  },
  modules: {
  }
})
