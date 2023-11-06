import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
//import Register from "../views/Register.vue";
import { supabase } from '../supabase/init';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      auth: false
    }
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
      auth: false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      auth: false
    }
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: Register,
  //   meta: {
  //     title: "Register",
  //     auth: false
  //   }
  // }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

//Naming the pages properly
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Active+`;
  next()
})

// Route guard for auth routes
router.beforeEach((to, from, next) => {
  const user = supabase.auth.user();

  if (to.matched.some((res) => res.meta.auth)) {//require auth? if yes :
    if (user) {
      next() //if user authenticated, then he can navigate
      return;
    }
    next({ name: 'Login' })
    return
  }
  next() //if the path doesnt require auth, then user can go to it
})

export default router;