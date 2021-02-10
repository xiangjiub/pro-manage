<template>
  <a-layout class="layout">
    <!-- <side-menu
      v-model:collapsed="collapsed"
      :collapsible="true"
      :theme="theme"
      :menuData="list"
    /> -->
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      class="layout-sider"
    >
      <!--      网站logo start-->
      <logo :collapsed="collapsed" />
      <!--      网站logo end-->
      <!--      侧边菜单栏start-->
      <side-menu :collapsed="collapsed" :menuData="list" :theme="theme" />
      <!--      侧边菜单栏end-->
    </a-layout-sider>
    <a-layout>
      <!--      页头 start-->
      <page-header v-model:collapsed="collapsed" />
      <a-layout-content class="layout-content">
        <tabs-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {Layout} from 'ant-design-vue'
import SideMenu from "@/layouts/menu/SideMenu.vue";
import Logo from "@/layouts/logo/index.vue";
import PageHeader from "@/layouts/header/index.vue";
import { TabsView } from "./tabs";
import { list } from "./muens";
export default defineComponent({
  name: 'AdminLayout',
  components: {
    SideMenu,
    Logo,
    PageHeader,
    TabsView,
    [Layout.name]: Layout,
    [Layout.Content.name]: Layout.Content,
    [Layout.Sider.name]: Layout.Sider,
  },
  setup() {
    const theme = ref("dark");
    const collapsed = ref<boolean>(false);
    const showSetting = ref(false);
    const drawerOpen = ref(false);

    const asiderWidth = computed(() => (collapsed.value ? "80px" : "256px"));

    return { theme, collapsed, showSetting, drawerOpen, list, asiderWidth };
  },
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  overflow: hidden;
  height: 100vh;

  .layout-sider {

  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-content {
    flex: none;
  }
}
</style>
