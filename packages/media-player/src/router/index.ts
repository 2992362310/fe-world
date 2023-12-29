import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/audio',
      name: 'audioPlayer',
      component: () => import('@/views/AudioView/index.vue')
    },
    {
      path: '/video',
      name: 'videoPlayer',
      component: () => import('@/views/VideoView/index.vue')
    },
    {
      path: '/ai',
      name: 'ai',
      component: () => import('@/views/AiView/index.vue')
    }
  ]
})

export default router
