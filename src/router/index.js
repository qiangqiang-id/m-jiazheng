import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/company',
        name: 'company',
        component: () => import('@/views/company')
      },
      {
        path: '/housekeeping',
        name: 'housekeeping',
        component: () => import('@/views/housekeeping')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  { path: '/taoge', component: () => import('@/views/my/components/Personal-Information.vue') },
  { path: '/login', name: '/login', component: () => import('@/views/login') },
  { path: '/Already', component: () => import('@/views/my/components/Already-contacted') }

]

const router = new VueRouter({
  routes
})

export default router
