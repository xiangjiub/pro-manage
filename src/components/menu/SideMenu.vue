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
    :theme="theme"
  >
    <div :class="['logo']">
      <router-link to="/dashboard/workplace">
        <img src="@/assets/logo.png" />
      </router-link>
    </div>
    <a-menu
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
      v-model:open-keys="openKeys"
      v-model:selected-keys="selectedKeys"
      @click="clickMenuItem"
    >
        <a-sub-menu key="sub2">
        <template #title>
          <span><UserOutlined /><span>Navigation Four</span></span>
        </template>
        <a-menu-item key="form">Option 7</a-menu-item>
        <a-menu-item key="icons">Option 8</a-menu-item>
        <a-menu-item key="button">Option 9</a-menu-item>
        <a-menu-item key="modal">Option 10</a-menu-item>
      </a-sub-menu>
      <!-- <template v-for="item in menuData" :key="item.name">
        <menu-item :menu-info="item"/>
      </template> -->
    </a-menu>
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
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { Menu } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import MenuItem from "./menu-item.vue";
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <i :class="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <i :class="item.icon" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true 此项必须被定义
  isSubMenu: true,
  props: {
    // 解构a-sub-menu的属性，也就是文章开头提到的为什么使用函数式组件
    ...Menu.SubMenu.props,
    // 接收父级传递过来的菜单信息
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};

export default defineComponent({
  name: "SideMenu",
  components: {
    // 'sub-menu': SubMenu,
    UserOutlined
    // 'a-sub-menu': Menu.SubMenu,
    // 'a-menu-item': Menu.Item,
    // MenuFoldOutlined,
    // MenuUnfoldOutlined,
    // PieChartOutlined,
    // MailOutlined,
    // DesktopOutlined,
    // InboxOutlined,
    // AppstoreOutlined,
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
    menuData: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  setup(props) {
    console.log(props.menuData);
    const inlineIndent = ref(12);
    // 当前路由
    const currentRoute = useRoute();
    const router = useRouter();
    const store = useStore();

    // 获取当前打开的子菜单
    const getOpenKeys = () => [currentRoute.matched[1]?.name];

    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name],
    });

    // 监听菜单收缩状态
    watch(
      () => props.collapsed,
      (newVal) => {
        state.openKeys = newVal ? [] : getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );

    // const menus = computed(() => store.getters.menus.length > 0 ? store.getters.menus : routes.find(item => item.name == 'Layout')!.children)
    // const menus = props.menuData;
    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name == "login" || props.collapsed) return;
        state.openKeys = getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );

    // 点击菜单
    const clickMenuItem = (e: any) => {
      console.log('点击了路由',e.key);
      router.push(e.key)
    };

    return {
      inlineIndent,
      ...toRefs(state),
      // menus,
      clickMenuItem,
    };
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
