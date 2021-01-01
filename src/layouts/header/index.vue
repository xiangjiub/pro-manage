<template>
  <a-layout-header class="layout-header">
    <div class="left-options">
      <span @click="() => $emit('update:collapsed', !collapsed)" class="menu-fold">
        <component :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'" />
      </span>
      <a-breadcrumb>
        <template v-for="routeItem in route.matched" :key="routeItem.name">
          <a-breadcrumb-item>
            <a>{{ routeItem.meta.title }}</a>
            <template v-slot:overlay>
              <a-menu v-if="routeItem.children.length">
                <template v-for="childItem in routeItem.children">
                  <a-menu-item v-if="!childItem.meta.hidden" :key="childItem.name">
                    <router-link :to="{name: childItem.name}">
                      {{ childItem.meta.title }}
                    </router-link>
                  </a-menu-item>
                </template>
              </a-menu>
            </template>
          </a-breadcrumb-item>
        </template>
      </a-breadcrumb>
  
    </div>
    <div class="right-options"></div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, createVNode } from "vue";
import { useRouter, useRoute } from "vue-router";
// import components from "@/layouts/header/components";
// import { message, Modal } from "ant-design-vue";
// import { QuestionCircleOutlined } from "@ant-design/icons-vue";
// import { useStore } from "vuex";
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
    // const store = useStore();

    // const state = reactive({
    //   username: store.getters.userInfo.username,
    //   fullscreenIcon: 'FullscreenOutlined'
    // })

    const router = useRouter();
    const route = useRoute();
    // console.log(route.matched);
    console.log(`matched:${route.matched}`)
    console.log(router.getRoutes(), "currentRoute");


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
  // height: $header-height;

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
