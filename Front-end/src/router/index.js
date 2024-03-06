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
    {
      path: '/myAdds',
      name: 'MyAdds',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/Auth/MyAdds.vue')
    },
    {
      path: '/myFavorites',
      name: 'MyFavorites',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/Auth/MyFavorites.vue')
    },
    {
      path: '/profile/seting',
      name: 'Seting',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/Auth/Seting.vue')
    },

    //product pages here 

    {
      path: '/mobiles',
      name: 'Mobile',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/ProductsPage/Mobile.vue')
    },
    {
      path: '/animals',
      name: 'Animals',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/ProductsPage/Animals.vue')
    }, {
      path: '/bikes',
      name: 'Bikes',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/ProductsPage/Bikes.vue')
    }, {
      path: '/electronic',
      name: 'Electronic',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/ProductsPage/Electronic.vue')
    }, {
      path: '/property',
      name: 'Property',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/ProductsPage/Property.vue')
    }, {
      path: '/cars',
      name: 'Cars',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/ProductsPage/Cars.vue')
    },
    {
      path: '/post',
      name: 'SellProduct',
      meta: { requiresAuth: true },
      component: () => import('@/Pages/ProductsPage/SellProduct.vue')
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
