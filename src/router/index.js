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
        component: () => import('@/views/my'),
        children: []
      }
    ]
  },
  {
    path: '/taoge',
    name: 'taoge',
    component: () => import('@/views/my/components/Personal-Information.vue')
  },
  {
    path: '/login',
    name: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('../views/my/components/identity.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/my/components/admin.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
