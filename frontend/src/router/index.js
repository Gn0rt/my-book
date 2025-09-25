import { createRouter, createWebHistory } from 'vue-router';
import Explorer from '@/pages/Explorer.vue';
import Blog from '@/pages/Blog.vue';
import Shop from '@/pages/Shop.vue';
import Login from '@/pages/Auth/DefaultAuth.vue';
import DetailBlog from '@/pages/DetailBlog.vue';
import DetailProduct from '@/pages/DetailProduct.vue';
import Cart from '@/pages/Cart.vue';
import Aboutus from '@/pages/Aboutus.vue';
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
      path: '/detail-blog/:id',
      name: 'DetailBlog',
      component: DetailBlog,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/about',
      name: 'About Us',
      component: Aboutus
    },
    {
      path: '/detail-product',
      name: 'DetailProduct',
      component: DetailProduct
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    }

  ],
})

export default router
