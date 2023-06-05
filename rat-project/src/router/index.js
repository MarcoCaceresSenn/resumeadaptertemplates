import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/landing-page.vue'

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
