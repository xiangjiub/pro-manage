<template>
  <a-button type="primary" @click="loadData"> 查询 </a-button>
  <dynamic-table ref="tableRef" :columns="columns" :get-list-func="userlist" >
   
  </dynamic-table>
</template>

<script lang="ts">
import { defineComponent, ref  } from "vue";
import {columns} from './columns'
import {DynamicTable} from '@/components/dynamic-table/index';
import {userlist} from '@/api/user'
export default defineComponent({
  components:{
    DynamicTable
  },
  setup() {
    const tableRef = ref<any>(null)
    const loadData = async () => {
      tableRef.value.refreshTableData();
    }

    return {
      tableRef,
      loadData,
      columns,
      userlist
    };
  },
});
</script>

<style lang="scss">
</style>