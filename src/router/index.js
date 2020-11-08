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
  }, {
    path: '/home/business',
    name: 'business',
    component: () => import('@/views/cooperation/business-form')
  },
  {
    path: '/home/domestic',
    name: 'domestic',
    component: () => import('@/views/cooperation/domestic-service')
  },
  {
    path: '/home/homeservice',
    name: 'homeservice',
    component: () => import('@/views/cooperation/home-service')
  }
]

const router = new VueRouter({
  routes
})

export default router
