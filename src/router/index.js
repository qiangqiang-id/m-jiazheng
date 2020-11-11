import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout'),
    children: [
      { path: '', redirect: 'home' },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          index: 1
        }
      },

      {
        path: '/company',
        name: 'company',
        component: () => import('@/views/company'),
        meta: {
          index: 2
        }
      },
      {
        path: '/housekeeping',
        name: 'housekeeping',
        component: () => import('@/views/housekeeping'),
        meta: {
          index: 3
        }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my'),
        children: [],
        meta: {
          index: 4
        }
      }
    ]
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
  },
  {
    path: '/housekeeping/:housekeepingID',
    name: 'housekeepingInfo',
    component: () => import('@/components/housekeepingInfo.vue')
  }, {
    path: '/companyInfo',
    name: 'companyInfo',
    props: true,
    component: () => import('@/components/company-info.vue')
  },
  // 我的关注
  {
    path: '/myfollow',
    name: 'myfollow',
    component: () => import('@/components/my_follow')
  },
  {
    path: '/matching_company',
    name: 'matching_company',
    component: () => import('@/components/matching_company')
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
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/my/components/about/index.vue')
  },
  {
    path: '/look',
    name: 'look',
    component: () => import('../views/look/index.vue')
  },
  { path: '/taoge', component: () => import('@/views/my/components/Personal-Information.vue') },
  { path: '/Already', component: () => import('@/views/my/components/Already-contacted') }

]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {

// })

export default router
