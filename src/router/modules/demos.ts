import { RouteRecordRaw } from "vue-router";
import { RouterTransition } from "@/components/transition";
import { markRaw } from "vue";
const routeName = "demos";
import AdminLayout from "@/layouts/AdminLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    // component: AdminLayout,
    component: markRaw(RouterTransition),
    redirect: "/about/item",
    meta: {
      title: "demo演示",
      isLogin: true,
    },
    children: [
      {
        path: "item",
        name: "About-item",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue"),
        meta: {
          isLogin: true,
          title: "样式的扩展",
          keepAlive: true
        },
      },
      {
        path: "form",
        name: "About-form",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/form/rule-form.vue"),
        meta: {
          title: "验证表单",
          isLogin: true,
          keepAlive: true
        },
      },
    //   {
    //     path: "icons",
    //     name: "About-icons",
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "@/views/form/rule-form.vue"),
    //     meta: {
    //       title: "自定义图标",
    //       isLogin: true,
    //       keepAlive: true
    //     },
    //   },
      {
        path: "list",
        name: "About-list",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/list/List.vue"),
        meta: {
          title: "列表数据",
          isLogin: true,
          keepAlive: true
        },
      },
      {
        path: "loadlist",
        name: "About-loadlist",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/loadlist/loadList.vue"
          ),
        meta: {
          title: "远程列表数据",
          isLogin: true,
          keepAlive: true
        },
      },
      {
        path: "re-use",
        name: `About-re-use`,
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Re-use/ReUse.vue"),
        meta: {
          title: "列表组件复用",
          isLogin: true,
          keepAlive: true
        },
      },
    ],
  },
  {
    path: "/system",
    name: "System",
    // component: AdminLayout,
    component: markRaw(RouterTransition),
    redirect: "/system/role",
    meta: {
      title: "系统管理",
      isLogin: true,
    },
    children: [
      {
        path: "role",
        name: `System-role`,
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/auth/system/role/index.vue"
          ),
        meta: {
          title: "角色管理",
          isLogin: true,
          keepAlive: true
        },
      },
    ],
  },
];

export default routes;
