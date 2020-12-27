
import { RouteRecordRaw } from 'vue-router'
import Login from "@/views/login/index.vue"

/**
 * 不需要授权就可以访问的页面
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            isLogin: false
        }
    }
]

export default routes