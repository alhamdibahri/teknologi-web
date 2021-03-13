import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Latihan1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/latihan-2',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Latihan2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
