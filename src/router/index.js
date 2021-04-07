import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import jobs from '../views/jobs/jobs.vue'
import jobDetails from '../views/jobs/jobDetails.vue'
import Compoitin from '../views/Compoitin.vue'
import post from '../views/post.vue'
import Confuse from '../views/Confuse.vue'
import TestXinput from '../views/TestXinput.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props: true
  },
  {
    path:'/Compoitin',
    name:'Compoitin',
    component:Compoitin
  },
  {
    path:'/post',
    name:'post',
    component:post
  },
  {
    path:'/Confuse',
    name:'Confuse',
    component:Confuse
  },
  {
    path:'/TestXinput',
    name:'TestXinput',
    component:TestXinput
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
