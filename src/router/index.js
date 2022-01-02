import { createRouter, createWebHistory } from 'vue-router'
import create from '../views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'create',
    component: create
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
