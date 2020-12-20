import { Router, isNavigationFailure } from "vue-router"


export function createRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        console.log(to);
        if (to.meta.isLogin) { //权限判断
            if (localStorage.getItem('token')) { //读取token值
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
