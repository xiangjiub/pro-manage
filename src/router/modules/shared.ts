
import { RouteRecordRaw } from 'vue-router'
import Login from "@/views/login/index.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {
            isLogin: false
        }
    }
]

export default routes