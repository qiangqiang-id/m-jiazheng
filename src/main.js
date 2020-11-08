import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Vant, { Lazyload, Area } from 'vant'
import 'vant/lib/index.css'
import '@/assets/global.scss'
import '@/mock/index.js'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.use(Lazyload)
Vue.use(Vant)
Vue.use(Area)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
