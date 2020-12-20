<template>
    <a-menu
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
      v-model:open-keys="openKeys"
      v-model:selected-keys="selectedKeys"
      @click="clickMenuItem"
    >
      <template v-for="item in menuData" :key="item.name">
        <menu-item :menu-info="item" />
      </template>
    </a-menu>
  <!-- </a-layout-sider> -->
</template>

<script lang="ts">
import {  defineComponent, reactive, ref, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { useStore } from "vuex";
import MenuItem from "./menu-item.vue";

export default defineComponent({
  name: "SideMenu",
  components: {
    MenuItem,
  },
  props: {
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
    // const store = useStore();

    // 获取当前打开的子菜单
    const getOpenKeys = () => [currentRoute.matched[1]?.path];

    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.path],
    });

    // 监听菜单收缩状态
    watch(
      () => props.collapsed,
      (newVal) => {
        state.openKeys = newVal ? [] : getOpenKeys();
        state.selectedKeys = [currentRoute.path];
      }
    );

    // const menus = computed(() => store.getters.menus.length > 0 ? store.getters.menus : routes.find(item => item.name == 'Layout')!.children)
    // const menus = props.menuData;
    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        // console.log(props.collapsed);
        // if (currentRoute.path == "login" || props.collapsed) return;
        // state.openKeys = getOpenKeys();
        // state.selectedKeys = [currentRoute.path];
        // console.log("选中了" + state.selectedKeys);
      }
    );

    // 点击菜单
    const clickMenuItem = (e: any) => {
      console.log(e.key);
      router.push({name: e.key})
    }
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
  //  display: flex;
  // align-items: center;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  img {
    height: 25px;
    margin-right: 8px;
  }
  h2 {
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
