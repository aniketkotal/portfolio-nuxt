import { createRouter, createWebHistory } from "vue-router";
import TheAbout from "../views/TheAbout.vue";
import TheHome from "../views/TheHome.vue";
import TheProjects from "../views/TheProjects.vue";
import TheTools from "../views/TheTools.vue";

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: TheHome,
  },
  {
    path: "/about",
    name: "about",
    component: TheAbout,
  },
  {
    path: "/projects",
    name: "projects",
    component: TheTools,
  },
  {
    path: "/tools",
    name: "tools",
    component: TheAbout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
