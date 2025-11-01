import { createRouter, createWebHistory } from 'vue-router';
import Explorer from '@/pages/Explorer.vue';
import Blog from '@/pages/Blog.vue';
import Shop from '@/pages/Shop.vue';
import Login from '@/pages/Auth/DefaultAuth.vue';
import DetailBlog from '@/pages/DetailBlog.vue';
import DetailProduct from '@/pages/DetailProduct.vue';
import Cart from '@/pages/Cart.vue';
import Aboutus from '@/pages/Aboutus.vue';
import Profile from '@/pages/Profile.vue';
import Admin from '@/pages/Admin/layout/AdminLayout.vue';
import ManageUser from '@/pages/Admin/views/User.vue';
import Dashboard from '@/pages/Admin/views/Dashboard.vue';
import ManageProduct from '@/pages/Admin/views/Product.vue';
import AdminLogin from '@/pages/Admin/Auth/DefaultAdminAuth.vue';
import ManageBlog from '@/pages/Admin/views/Blog.vue';
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
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true } // Chỉ cho phép truy cập khi đã đăng nhập
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
        {path: 'dashboard', name: 'Dashboard', component: Dashboard},
        {path: 'blog', name: 'AdminBlog', component: ManageBlog},

      ]
    },
    {
      path: "/admin-login",
      name: "Admin Login",
      component: AdminLogin
    }

  ],
})
// router/index.js
router.beforeEach((to, from, next) => {
  // 1. Bảo vệ route ADMIN
  if (to.path.startsWith('/admin')) {
    if (to.path === '/admin-login') {
      next(); // cho vào trang login admin
    } else {
      const adminSession = localStorage.getItem('adminSession');
      if (adminSession) {
        next();// Đã đăng nhập → cho vào
      } else {
        next('/admin-login'); // bắt đăng nhập admin
      }
    }
    return;
  }

  // 2. Bảo vệ route USER (tùy chọn: có thể cho xem không cần login)
  // Ví dụ: chỉ /cart, /profile cần login
  if (to.meta.requiresAuth) {
    const userSession = localStorage.getItem('userSession')
    if (userSession) {
      next();
    } else {
      next('/login');
    }
    return;
  }

  // 3. Các route công khai (home, blog...) → cho qua
  next();
})
export default router
