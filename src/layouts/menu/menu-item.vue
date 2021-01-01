<template>
  <template v-if="!menuInfo.meta.hidden">
    <a-sub-menu
      :key="menuInfo.name"
      v-bind="$attrs"
    >
      <template v-slot:title>
        <span>
          <CreditCardOutlined />
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.name"  v-bind="$attrs">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <!-- <UserOutlined /> -->
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menu-item :menu-info="item" :key="item.name" />
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
import { defineComponent } from "vue";
import { Menu } from "ant-design-vue";
import { CreditCardOutlined } from "@ant-design/icons-vue";
// import { IconFont } from "@/components/iconfont";
export default defineComponent({
  name: "MenuItem",
  components: {
    // IconFont,
    "a-sub-menu": Menu.SubMenu,
    "a-menu-item": Menu.Item,
    CreditCardOutlined,
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