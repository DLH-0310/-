import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  // 一级路由容器
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    // 一级路由登录页面
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
// 路由拦截器 该方法接收函数作为参数
// to ：表示去哪里的路由信息
// from ：表示来自哪里的路由信息
// next ：是一个方法，用来放行
router.beforeEach((to, from, next) => {
// 做一个判断用户是否处在登录状态，有就通过，没有就跳回登录
  // 如果是登录页,直接放行
  if (to.path === '/login') {
    next()
  }
  // 非登录页判断有没有token
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
  // 没有就跳回登录页
    next('/login')
  }
})

export default router
