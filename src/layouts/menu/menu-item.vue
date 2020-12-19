<template>
  <template v-if="!menuInfo.meta.hidden">
    <a-sub-menu
      :key="menuInfo.path"
      v-bind="$attrs"
    >
      <template v-slot:title>
        <span>
          <UserOutlined />
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.path">
            <!-- <UserOutlined /> -->
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menu-item :menu-info="item" :key="item.path" />
        </template>
      </template>
    </a-sub-menu>
    <!-- <a-menu-item v-else :key="menuInfo.name">
      <icon-font style="color: aliceblue" :type="menuInfo.meta. icon" />
      {{ menuInfo.meta.title }}
    </a-menu-item> -->
  </template>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import { Menu } from "ant-design-vue";
import { UserOutlined } from "@ant-design/icons-vue";
// import { IconFont } from "@/components/iconfont";
export default defineComponent({
  name: "MenuItem",
  components: {
    // IconFont,
    "a-sub-menu": Menu.SubMenu,
    "a-menu-item": Menu.Item,
    UserOutlined,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props){
      console.log(props.menuInfo);
  }
});
</script>


<style lang="scss" scoped>
</style>