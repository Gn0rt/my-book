import { createRouter, createWebHistory } from 'vue-router'
import Explorer from '@/pages/Explorer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Explorer',
      component: Explorer,
    }
  ],
})

export default router
