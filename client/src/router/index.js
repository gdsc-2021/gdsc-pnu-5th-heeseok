import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/Main.vue'
import Introduce from "../components/introduce.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/introduce",
    name: "Introduce",
    component: Introduce,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;