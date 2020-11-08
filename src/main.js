import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Vant, { Area } from 'vant'
import 'vant/lib/index.css'
import '@/assets/global.scss'
Vue.use(Vant)
Vue.use(Area)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
