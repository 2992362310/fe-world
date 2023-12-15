import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/base'
    },
    {
      path: '/base',
      name: 'front-base',
      component: () => import('@/views/FrontBase/index.vue')
    },
    {
      path: '/framework',
      name: 'front-framework',
      component: () => import('@/views/Framework/index.vue')
    },
    {
      path: '/lib',
      name: 'front-lib',
      component: () => import('@/views/FrontLib/index.vue')
    },
    {
      path: '/job',
      name: 'front-job',
      component: () => import('@/views/FrontJob/index.vue')
    },
    {
      path: '/extend',
      name: 'front-extend',
      component: () => import('@/views/FrontExtend/index.vue')
    },
    {
      path: '/interview',
      name: 'front-interview',
      component: () => import('@/views/FrontInterview/index.vue')
    },
    {
      path: '/vscode',
      name: 'vscode',
      component: () => import('@/views/VsCode/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage/index.vue')
    }
  ]
})

export default router
