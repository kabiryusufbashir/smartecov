import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Services from '../views/Services'
import Contact from '../views/Contact'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
