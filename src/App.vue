<template>
  <!-- <div> -->
    <config-provider :locale="zhCN">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </config-provider>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ConfigProvider } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default defineComponent({
  components: {
    ConfigProvider,
  },
  setup() {
    return {
      zhCN,
    };
  },
});
</script>
<style lang="scss">
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
