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
          key: '1',
          title: '项目信息管理',
          path: '/infomationManage',
          icon:'iconfont icon-information'
        },
        {
          key: '2',
          title: '安全信息管理',
          path: '/safeInfoManage',
          icon:'iconfont icon-anquan',
          children: [
            {
              key: '2.1',
              title: '安全风险管理',
              path: '/safeRisk',
              icon:'',
              children: [
                { 
                  key: '2.1.1',
                  title: '风险分类管理',
                  path: '/riskClassifyManage',
                  icon:'',
                },
                {
                    key: '2.1.2',
                    title: '分类辨识',
                    path: '/classifyIdentity',
                    icon:'',
                }
              ],
            },
          ],
        },
        {
          key: '3',
          title: '质量信息管理',
          path: '/qualityInfoManage',
          icon:'iconfont icon-zhiliang',
          children:[
              {
                  key: '3.1',
                  title: '质量控制点管理',
                  path: '/controlPointManage',
                  icon:'',
              }
          ]
        }
      ],
    };
  },
  setup() {
    const theme = ref('light');
    const collapsed = ref(false);
    const showSetting = ref(false);
    const drawerOpen = ref(false);

    return { theme,collapsed,showSetting,drawerOpen };
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
