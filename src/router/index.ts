// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/auth/LogIn.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import ManageUser from '../views/admin/ManageUser.vue'

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/manageuser',
    name: 'ManageUser',
    component: ManageUser,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
