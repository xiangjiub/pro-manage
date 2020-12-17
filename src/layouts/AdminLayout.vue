<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- <side-menu :collapsed="collapsed" :collapsible="true" /> -->
    <side-menu
      :collapsed="collapsed"
      :collapsible="true"
      :theme="theme"
      :menuData="list"
    />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
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
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import SideMenu from "@/components/menu/SideMenu.vue";
export default defineComponent({
  components: {
    // UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SideMenu,
  },
  data() {
    return {
      // selectedKeys: ["1"],
      minHeight: window.innerHeight - 64 - 122,
      // collapsed: false,
      // showSetting: false,
      // drawerOpen: false,
      list: [
        {
          path: "/demos",
          name: 'demos',
          redirect: "/demos/custom-a-custom-modal",
          // component: markRaw(RouterTransition),
          meta: {
            title: "demo演示",
            icon: "icon-zhuomian",
            // hidden:false
          },
          children: [
            {
              path: "custom-a-custom-modal",
              name: `demos-custom-modal`,
              meta: {
                title: "自定义模态框",
                icon: "icon-zhuomian",
              },
              component: () => import(/* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/demo/custom-modal.vue')
            },
            {
              path: "button",
              name: `demos-button`,
              meta: {
                title: "按钮的扩展",
                icon: "icon-zhuomian",
              },
              component: () => import(/* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/demo/custom-modal.vue')
            },
            {
              path: "form",
              name: `demos-form`,
              meta: {
                title: "验证表单",
                icon: "icon-zhuomian",
              },
              component: () => import(/* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/demo/custom-modal.vue')
            },
            {
              path: "icons",
              name: `demos-icons`,
              meta: {
                title: "自定义图标",
                icon: "icon-zhuomian",
              },
              component: () => import(/* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/demo/custom-modal.vue')
            },
          ],
        },
      ],
    };
  },
  setup() {
    const theme = ref("light");
    const collapsed = ref(false);
    const showSetting = ref(false);
    const drawerOpen = ref(false);

    return { theme, collapsed, showSetting, drawerOpen };
  },
});
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger {
  min-height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .side-menu {
    &.fixed-side {
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
    }
  }
}
</style>
