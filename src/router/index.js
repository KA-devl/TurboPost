import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import CreatePackage from "../views/CreatePackage.vue";
import { supabase } from "../supabase/init";
import TrackPackage from "../views/TrackPackage.vue";
import ContactUs from "../views/ContactUs.vue";

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
  {
    path: "/create-package",
    name: "CreatePackage",
    component: CreatePackage,
    meta: {
      title: "Create a new package",
      auth: false
    }
  },
  {
    path: "/track-package",
    name: "TrackPackage",
    component: TrackPackage,
    meta: {
      title: "Track package",
      auth: false
    }
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      title: "Contact Us",
      auth: false
    }
  }


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