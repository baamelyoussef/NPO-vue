import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/auth/login.vue";
import Dashboard from "@/pages/dashboard.vue";
import home from "@/pages/home.vue";
import organization from "@/pages/organization-info.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    children: [
      // here we will have all the pages that related to dashboard
      {
        path: "/",
        name: "home",
        component: home,
      },
      {
        path: "/organization-info",
        name: "organization-info",
        component: organization,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
