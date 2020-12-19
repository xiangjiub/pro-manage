<template>
  <a-layout-header class="layout-header">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, createVNode } from "vue";
import { useRouter, useRoute } from "vue-router";
// import components from "@/layouts/header/components";
import { message, Modal } from "ant-design-vue";
import { QuestionCircleOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
// import {TABS_ROUTES} from "@/store/mutation-types";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "PageHeader",
  components: {
    // ...components,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup() {
    const store = useStore();

    // const state = reactive({
    //   username: store.getters.userInfo.username,
    //   fullscreenIcon: 'FullscreenOutlined'
    // })

    const router = useRouter();
    const route = useRoute();
    console.log(route.matched);
    console.log(router.getRoutes(), "currentRoute");

    // 退出登录
    // const doLogout = () => {
    //   Modal.confirm({
    //     title: '您确定要退出登录吗？',
    //     icon: createVNode(QuestionCircleOutlined),
    //     onOk: () => {
    //       console.log(router, '退出登录')
    //       // logout({})
    //       store.dispatch('user/Logout').then(res => {
    //         message.success('成功退出登录')
    //         // 移除标签页
    //         // localStorage.removeItem(TABS_ROUTES)
    //         router.replace({
    //           name: 'login',
    //           query: {
    //             redirect: route.fullPath
    //           }
    //         }).finally(() => location.reload())
    //       })
    //     }
    //   })
    // }

    // 切换全屏图标
    // const toggleFullscreenIcon = () => (state.fullscreenIcon = document.fullscreenElement !== null ? 'FullscreenExitOutlined' : 'FullscreenOutlined')

    // 监听全屏切换事件
    // document.addEventListener("fullscreenchange", toggleFullscreenIcon)

    // 全屏切换
    // const toggleFullScreen = () => {
    //   if (!document.fullscreenElement) {
    //     document.documentElement.requestFullscreen();
    //   } else {
    //     if (document.exitFullscreen) {
    //       document.exitFullscreen();
    //     }
    //   }
    // }

    // 图标列表
    // const iconList = [
    //   {
    //     icon: 'SearchOutlined',
    //     tips: '搜索'
    //   },
    //   {
    //     icon: 'GithubOutlined',
    //     tips: 'github',
    //     eventObject: {
    //       click: () => window.open('https://github.com/buqiyuan/vue3-antd')
    //     }
    //   },
    //   {
    //     icon:  'SettingOutlined',
    //     tips: '网站设置'
    //   },
    //   {
    //     icon: 'LockOutlined',
    //     tips: '锁屏',
    //     eventObject: {
    //       click: () => store.commit('lockscreen/setLock', true)
    //     }
    //   },
    // ]

    return {
      // ...toRefs(state),
      // iconList,
      // toggleFullScreen,
      // doLogout,
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding: 0;
  height: $header-height;

  .left-options {
    display: flex;
    align-items: center;

    .menu-fold {
      padding: 0 24px;
      cursor: pointer;
    }
  }

  .right-options {
    display: flex;
    align-items: center;

    > * {
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>
