import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Test from '@/views/test'
import Tabbar from '@/views/tabbar'
import Home from '@/views/home'

Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/',
    component: Tabbar,
    children: [
      {
        path: '', // 默认子路由
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
