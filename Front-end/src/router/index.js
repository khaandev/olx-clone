import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/Auth/Auth';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Index',
      component: () => import('@/Pages/Index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/Register.vue')
    },
    {
      path: '/profile/info',
      name: 'Profile',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/Auth/Profile.vue')
    },
  ]
});

router.beforeEach(async (to, from, next) => {

  const auth = useAuthStore();
  await auth.loadUser();

  if (to.name === "Login" || to.name === "Register") {
    if (auth.isAuthenticated) {
      return next("/");
    }
  } else {
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
      return next("/login");
    }
  }

  next();
});
export default router
