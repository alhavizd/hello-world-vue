import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Layout = () => import('./views/layouts/Layout').then(m => m.default || m)
const Home = () => import('./views/Home').then(m => m.default || m)
const About = () => import('./views/About').then(m => m.default || m)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: { name: 'home'},
    children: [
      { path: '/home', name: 'home', component: Home },
      { path: '/about', name: 'about', component: About }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
