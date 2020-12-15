import store from '@/store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/index.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      isLogin:false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: AdminLayout,
    meta:{
      isLogin:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      isLogin:true
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) { //权限判断
//     if (localStorage.getItem('token')) { //读取token值
//     //  成功
//       next()
//     } else {
//       next({path:'/'})
//     }
//   } else {
//     // 没有meta.auth 不用管
//     next()
//   }
// });

//#region 
// router.beforeEach((to, from, next) => {
 
//   //获取用户登录成功后储存的登录标志
//   const getFlag = localStorage.getItem("token");
//   const getid = localStorage.getItem("user");
//   console.log(getFlag,`user:---${getid}`)
//   //如果登录标志存在且为isLogin，即用户已登录
//   if (getFlag === "isLogin"&&getid !== null) {

//       //设置vuex登录状态为已登录
//       store.state.isLogin = true;
//       next();

//       //如果已登录，还想想进入登录注册界面，则定向回首页
//       // if (!to.meta.isLogin) {
//       //     //iViewUi友好提示
//       //     // iView.Message.error('请先退出登录');
//       //     next({
//       //         path: '/'
//       //     })
//       // }

//       //如果登录标志不存在，即未登录
//   } else {

//       //用户想进入需要登录的页面，则定向回登录界面
//       if (to.meta.isLogin) {
//           next({
//               path: '/login',
//           })
//           //用户进入无需登录的界面，则跳转继续
//       } else {
//           next()
//       }

//   }

// });

// router.afterEach(() => {
//   window.scroll(0, 0);
// });
//#endregion

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) { //权限判断
    if (localStorage.getItem('token')) { //读取token值
    //  成功
      next()
    } else {
      next({path:'/'})
    }
  } else {
    // 没有meta.auth 不用管
    next()
  }
});

export default router
