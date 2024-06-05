import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/Auth/Auth";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/Pages/Index.vue"),
    },
    {
      path: "/login",
      name: "Login",
      meta: { requiresAuth: true },
      component: () => import("@/Pages/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      meta: { requiresAuth: true },
      component: () => import("@/Pages/Register.vue"),
    },
    {
      path: "/profile/info",
      name: "Profile",
      meta: { requiresAuth: true },
      component: () => import("@/Pages/Auth/Profile.vue"),
    },
    {
      path: "/myAdds",
      name: "MyAdds",
      meta: { requiresAuth: true, user: true },
      component: () => import("@/Pages/Auth/MyAdds.vue"),
    },
    {
      path: "/myFavorites",
      name: "MyFavorites",
      meta: { requiresAuth: true , user: true},
      component: () => import("@/Pages/Auth/MyFavorites.vue"),
    },
    {
      path: "/my/reported",
      name: "MyReported",
      meta: { requiresAuth: true , user: true},
      component: () => import("@/Pages/Auth/MyReported.vue"),
    },
    

    //product pages here

    {
      path: "/mobiles",
      name: "Mobile",
      component: () => import("@/Pages/ProductsPage/Mobile.vue"),
    },
    {
      path: "/animals",
      name: "Animals",
      component: () => import("@/Pages/ProductsPage/Animals.vue"),
    },
    {
      path: "/bikes",
      name: "Bikes",
      component: () => import("@/Pages/ProductsPage/Bikes.vue"),
    },
    {
      path: "/electronic",
      name: "Electronic",
      component: () => import("@/Pages/ProductsPage/Electronic.vue"),
    },
    {
      path: "/property",
      name: "Property",
      component: () => import("@/Pages/ProductsPage/Property.vue"),
    },
    {
      path: "/cars",
      name: "Cars",
      component: () => import("@/Pages/ProductsPage/Cars.vue"),
    },
    {
      path: "/add/product",
      name: "SellProduct",
      meta: { requiresAuth: true , user: true},
      component: () => import("@/Pages/ProductsPage/SellProduct.vue"),
    },
    {
      path: "/product/detailes/:id",
      name: "ProductDetailes",
      component: () => import("@/Pages/ProductsPage/ProductDetailes.vue"),
    },

    //admin pages

  
    {
      path: "/category",
      name: "Category",
      meta: { requiresAuth: true ,admin: true},
      component: () => import("@/Pages/Admin/Category.vue"),
    },
    {
      path: "/report",
      name: "ProductReport",
      meta: { requiresAuth: true,admin: true },
      component: () => import("@/Pages/Admin/ProductReport.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/Pages/NotFound.vue"),
    }
  ],
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

    if (auth.isAuthenticated && to.meta.admin) {
      if (auth.userInfo?.user?.role !== "admin") return next("/");
    }
    if (auth.isAuthenticated && to.meta.user) {
      if (auth.userInfo?.user?.role !== "user") return next("/");
    }
  }

  
  

  next();
});

export default router;
