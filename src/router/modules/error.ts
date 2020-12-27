import {RouteRecordRaw} from 'vue-router'
// import {RouterTransition} from '@/components/transition'
import {markRaw} from "vue";
import AdminLayout from '@/layouts/AdminLayout.vue'

const routeName = 'error'

export const notFound = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/error/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
}

export const errorRoutes = {
    path: '/error',
    name: routeName,
    redirect: '/error/404',
    component: AdminLayout,
    meta: {
        title: '错误页',
        icon: 'EditOutlined',
        // hidden: true
        isLogin: true
    },
    children: [
        {
            path: '404',
            name: `${routeName}-404`,
            meta: {
                title: '404',
                icon: 'UserOutlined',
                isLogin: true
            },
            component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
        }
    ]
}
