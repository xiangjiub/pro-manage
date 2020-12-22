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
    };

    return {
      loadData,
    };
  },
});
</script>

<style lang="scss">
</style>