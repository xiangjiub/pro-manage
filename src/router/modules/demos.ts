import { RouteRecordRaw } from 'vue-router'
// import {RouterTransition} from '@/components/transition'
import { markRaw } from "vue";
const routeName = 'demos'
import AdminLayout from '@/layouts/AdminLayout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/about',
        name: 'About',
        component: AdminLayout,
        redirect: '/about/item',
        meta: {
            isLogin: true
        },
        children: [
            {
                path: 'item',
                name: 'About-item',
                component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
                meta: {
                    isLogin: true
                }
            },
            {
                path: 'form',
                name: 'About-form',
                component: () => import(/* webpackChunkName: "about" */ '@/views/form/rule-form.vue'),
                meta: {
                    isLogin: true
                }
            },
            {
                path: 'icons',
                name: 'About-icons',
                component: () => import(/* webpackChunkName: "about" */ '@/views/form/rule-form.vue'),
                meta: {
                    isLogin: true
                }
            },

        ]
    },

]

export default routes
