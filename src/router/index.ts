import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Editor from '../views/Editor.vue'
import Settings from '../views/Settings.vue'
import ErrorTest from '../views/ErrorTest.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/editor', component: Editor },
  { path: '/settings', component: Settings },
  { path: '/error-test', component: ErrorTest },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
