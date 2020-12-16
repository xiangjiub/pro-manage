<template>
  <!-- <a-layout-sider
    collapsed="collapsed"
    :trigger="null"
    :collapsible='collapsible'
    width="256px"
    :class="['side-menu', 'beauty-scroll', isMobile ? null : 'shadow']"
  >
    <div class="logo">
      <img src="@/assets/logo.png" />
      <h1>Vue3测试版</h1>
    </div> -->

  <a-layout-sider
    width="256px"
    :collapsible="collapsible"
    :collapsed="collapsed"
    :trigger="null"
  >
    <div :class="['logo']">
      <router-link to="/dashboard/workplace">
        <img src="@/assets/logo.png" />
      </router-link>
    </div>
    <!-- <i-menu :theme="theme" :collapsed="collapsed" :options="menuData" @select="onSelect" class="menu"/> -->
  </a-layout-sider>

  <!-- <a-menu
      theme="dark"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu key="sub2">
        <template #title>
          <span><UserOutlined /><span>Navigation Four</span></span>
        </template>
        <a-menu-item key="1">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu> -->
  <!-- </a-layout-sider> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "SideMenu",
  components: {
    // UserOutlined
  },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false,
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
    // menuData: {
    //   type: Array,
    //   required: true
    // },
    // theme: {
    //   type: String,
    //   required: false,
    //   default: 'dark'
    // }
  },
});
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  margin: 20px;
  overflow: hidden;
  img {
    width: 32px;
  }
  h1 {
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
