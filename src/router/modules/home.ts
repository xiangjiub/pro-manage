import { RouteRecordRaw } from 'vue-router'
// import {RouterTransition} from '@/components/transition'
import { markRaw } from "vue";
const routeName = 'demos'
import AdminLayout from '@/layouts/AdminLayout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'About',
        component: AdminLayout,
        meta: {
            isLogin: true
        }
    },

]

export default routes
