import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/Main.vue'
import Introduce from "../components/Introduce.vue";
import Member from "../components/Member.vue";
import Activity from "../components/Activity.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Introduce",
    name: "Introduce",
    component: Introduce,
  },
  {
    path: "/Member",
    name: "Member",
    component: Member,
  },
  {
    path: "/Activity",
    name: "Activity",
    component: Activity,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;