<template>
  <a-button type="primary" @click="loadData"> 查询 </a-button>
  <a-table
    :columns="columns"
    :row-key="(record) => record.login.uuid"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #name="{ text }"> {{ text.first }} {{ text.last }} </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/api/index";
export default defineComponent({
  setup() {
    const loadData = () => {
      api.userlist().then((data: any) => {
        console.log(data);
      });
      // const { code, result, message: msg } = await store.dispatch("user/Login")
      //   .finally(() => {
      //     state.loading = false;
      //     message.destroy();
      //   });

      //  if (code == 200) {
      //   message.success('登录成功！')
      //   router.push("/home");
      // } else {
      //   message.info(msg || '登录失败')
      // }
    };

    return {
      loadData,
    };
  },
});
</script>

<style lang="scss">
</style>