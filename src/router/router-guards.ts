import { Router, isNavigationFailure } from "vue-router"
import {ACCESS_TOKEN, CURRENT_USER} from '@/store/mutation-types'
import {createStorage} from '@/utils/Storage'
import NProgress from 'nprogress' // progress bar
const Storage = createStorage()

NProgress.configure({showSpinner: false}) // NProgress Configuration

const loginRoutePath = '/login'
const defaultRoutePath = '/about'

const allowList = ['Login', 'icons', 'error', 'error-404'] // no redirect whitelist


export function createRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        NProgress.start()
        console.log(to);
        const token = Storage.get(ACCESS_TOKEN)
        console.log(`路由的token为${token}`);
        // if (to.meta.isLogin) { //权限判断
        //     if (token) { //读取token值
        //         //  成功
        //         next()
        //     } else {
        //         next({ path: '/login' })
        //     }
        // } else {
        //     // 没有meta.auth 不用管
        //     next()
        // }
        if (token) {
            if (to.name === 'login') {
                next({path: defaultRoutePath})
                NProgress.done()
            } else {
                const hasRoute = router.hasRoute(to.name!)
                if (allowList.includes(to.name as string) || hasRoute) {
                    // 在免登录名单，直接进入
                    next()
                }
                // } else {
                //     next()
                // }
            }
        } else {
            // not login
            if (allowList.includes(to.name as string)) {
                // 在免登录名单，直接进入
                next()
            } else {
                // next({path: loginRoutePath, query: {redirect: to.fullPath}, replace: true})
                next({ path: loginRoutePath })
            }
        }
    });

    router.afterEach((to, from, failure) => {
        if (isNavigationFailure(failure)) {
            console.log('failed navigation', failure)
        }
        NProgress.done() 
    })

    router.onError(error => {
        console.log(error, '路由错误')
    })

}
