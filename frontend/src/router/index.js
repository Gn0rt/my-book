import { createRouter, createWebHistory } from 'vue-router'
import Explorer from '@/pages/Explorer.vue'
import Blog from '@/pages/Blog.vue'
import Shop from '@/pages/Shop.vue'
import Login from '@/pages/Auth/DefaultAuth.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Explorer',
      component: Explorer,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }

  ],
})

export default router
