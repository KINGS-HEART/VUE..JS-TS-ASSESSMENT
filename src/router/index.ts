import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import MarkdownEditor from "../pages/MarkdownEditor.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/editor", name: "MarkdownEditor", component: MarkdownEditor },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
