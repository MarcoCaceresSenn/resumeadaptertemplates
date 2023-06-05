import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/landing-page.vue'

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingView
  },
  {
    path: '/login',
    name: 'login-page',
    component: () => import('../views/login-page.vue')
  },
  {
    path: '/home',
    name: 'home-page',
    component: () => import('../views/home-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
