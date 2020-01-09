import Vue from 'vue'
import VueRouter from 'vue-router'
import Jokes from '../views/Jokes.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/jokes',
    name: 'jokes',
    component: Jokes
  }

]

const router = new VueRouter({
  routes
})

export default router
