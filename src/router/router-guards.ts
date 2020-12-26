import { Router, isNavigationFailure } from "vue-router"
import {ACCESS_TOKEN, CURRENT_USER} from '@/store/mutation-types'
import {createStorage} from '@/utils/Storage'
const Storage = createStorage()

export function createRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        console.log(to);
        const token = Storage.get(ACCESS_TOKEN)
        console.log(`路由的token为${token}`);
        if (to.meta.isLogin) { //权限判断
            if (token) { //读取token值
                //  成功
                next()
            } else {
                next({ path: '/' })
            }
        } else {
            // 没有meta.auth 不用管
            next()
        }
    });

    router.afterEach((to, from, failure) => {
        if (isNavigationFailure(failure)) {
            console.log('failed navigation', failure)
        }
    })

    router.onError(error => {
        console.log(error, '路由错误')
    })

}
