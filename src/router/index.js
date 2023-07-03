import { createRouter, createWebHashHistory } from 'vue-router'
import LandingView from '../views/LandingPage.vue'


const routes = [
  {
    path: '/cambiar',
    name: 'landing-page',
    component: LandingView
  },
  {
    path: '/login',
    name: 'login-page',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'home-page',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/',
    name: 'form-resume',
    component: () => import('../views/FormResume.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
