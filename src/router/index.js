import { createRouter, createWebHistory } from "vue-router";
import Style from "@/views/Style.vue";

const routes = [
  {
    path: "/",
    name: "Style",
    component: Style,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
