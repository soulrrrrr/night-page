import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Question from '../views/Question.vue'
import Login from '../views/Login.vue'
import Choose from '../views/Choose.vue'
// import { createRouter, createWebHistory } from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/choose',
    name: 'Choose',
    component: Choose
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/question/*',
    name: 'Question',
    component: Question
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
