<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- <side-menu
      v-model:collapsed="collapsed"
      :collapsible="true"
      :theme="theme"
      :menuData="list"
    /> -->
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
      <!--      网站logo start-->
      <logo :collapsed="collapsed"/>
      <!--      网站logo end-->
      <!--      侧边菜单栏start-->
      <side-menu :collapsed="collapsed" :menuData="list" :theme="theme"/>
      <!--      侧边菜单栏end-->
    </a-layout-sider>
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
      <!--      页头 start-->
      <!-- <page-header v-model:collapsed="collapsed"/> -->
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import SideMenu from "@/layouts/menu/SideMenu.vue";
import Logo from '@/layouts/logo/index.vue'
// import PageHeader from '@/layouts/header/index.vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import {list} from './muens'
export default defineComponent({
  components: {
    SideMenu,
    Logo,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    // PageHeader,
  },
  data() {
    return {
      // selectedKeys: ["1"],
      minHeight: window.innerHeight - 64 - 122,
      // collapsed: false,
      // showSetting: false,
      // drawerOpen: false,
    };
  },
  setup() {
    const theme = ref("dark");
    const collapsed = ref<boolean>(false);
    const showSetting = ref(false);
    const drawerOpen = ref(false);

    return { theme, collapsed, showSetting, drawerOpen,list };
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
