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
            {
                path: 'list',
                name: 'About-list',
                component: () => import(/* webpackChunkName: "about" */ '@/views/list/List.vue'),
                meta: {
                    isLogin: true
                }
            },
            {
                path: 'loadlist',
                name: 'About-loadlist',
                component: () => import(/* webpackChunkName: "about" */ '@/views/loadlist/loadList.vue'),
                meta: {
                    isLogin: true
                }
            },
        ]
    },

]

export default routes
