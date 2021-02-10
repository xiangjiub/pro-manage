import store from '@/store'
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/index.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { App } from "vue";
import { createRouterGuards } from './router-guards'
// import shared from "@/router/modules/shared"
import shared from './modules/shared'
import { errorRoutes } from "@/router/modules/error"
import common from "@/router/common"



export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect:'/about',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: {
      title: '首页'
    },
    children: [
      ...common
    ]
  },
  // ...common,
  ...shared,
  errorRoutes
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(''),
  routes
})


export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}


export default router
