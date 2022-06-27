import { createRouter, createWebHistory } from "vue-router";
import TheAbout from "../views/TheAbout.vue";
import TheHome from "../views/TheHome.vue";
import TheProjects from "../views/TheProjects.vue";
import TheTools from "../views/TheTools.vue";

const routes = [
  {
    path: "/",
    name: "main",
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
    component: TheProjects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to) return { top: 0, behavior: "smooth" };
  },
});

export default router;
