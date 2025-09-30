import { createRouter, createWebHistory } from 'vue-router';
import Explorer from '@/pages/Explorer.vue';
import Blog from '@/pages/Blog.vue';
import Shop from '@/pages/Shop.vue';
import Login from '@/pages/Auth/DefaultAuth.vue';
import DetailBlog from '@/pages/DetailBlog.vue';
import DetailProduct from '@/pages/DetailProduct.vue';
import Cart from '@/pages/Cart.vue';
import Aboutus from '@/pages/Aboutus.vue';
import Admin from '@/pages/Admin/layout/AdminLayout.vue';
import ManageUser from '@/pages/Admin/views/User.vue';
import Dashboard from '@/pages/Admin/views/Dashboard.vue';
import ManageProduct from '@/pages/Admin/views/Product.vue';

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
    },
    //admin
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      children: [
        {path: '', redirect: {name: 'Dashboard'}},
        {path: 'user', name:'User', component: ManageUser},
        {path: 'product', name: 'Product', component: ManageProduct},
        {path: 'dashboard', name: 'Dashboard', component: Dashboard}
      ]
    }

  ],
})
// Thêm trước export default router
router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem('currentUser');
  const user = currentUser ? JSON.parse(currentUser) : null;

  // Nếu route bắt đầu bằng /admin
  if (to.path.startsWith('/admin')) {
    if (user && user.role === 'admin') {
      next(); // Cho phép
    } else {
      next('/login'); // Chặn, redirect đến login
    }
  } else {
    next(); // Cho phép các route khác
  }
});
export default router
