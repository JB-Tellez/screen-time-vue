import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import FamilyHome from '@/components/FamilyHome'
import KidHome from '@/components/KidHome'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/family/:id',
      name: 'FamilyHome',
      component: FamilyHome
    },
    {
      path: '/family/:id/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/family/:family_id/kid/:kid_id',
      name: 'KidHome',
      component: KidHome
    },
  ]
})
