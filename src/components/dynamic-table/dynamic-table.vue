<template>
  <a-table
    :columns="columns"
    :loading="loading"
    :data-source="data"
    v-bind="{ ...$props, ...$attrs }"
  >
   <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>

<script lang="ts">
// import { PaginationProps } from "ant-design-vue/lib/pagination/Pagination";
import { ColumnProps, TableProps } from "ant-design-vue/lib/table/interface";
import { defineComponent, PropType, reactive, toRefs } from "vue";

interface Columns extends ColumnProps {
  // actions?: any;
  dataIndex: string;
}

// type pageOption = Partial<typeof PaginationProps>;

interface Props extends Omit<TableProps, "columns"> {
  columns: Columns[];
  //   rowKey: string | ((record: any) => string);
  //   pageOption: pageOption;
  getListFunc: (prams) => any;
}
export default defineComponent({
  name: "DynamicTable",
  props: {
    columns: {
      type: Object as PropType<Columns[]>,
    },
    getListFunc: {
      // 获取列表数据函数API
      type: Function,
    },
  },
  setup(props: any) {
    //   const {pageOption} = usePages()

    // const { columns,getListFunc } = toRefs(props);
    
    const state = reactive({
      expandItemRefs: {},
      data: [], // 表格数据
      //   pageOption: Object.assign(pageOption, props.pageOption), // 表格分页
      // actions:
      //   props.columns.find((item) => (item.dataIndex || item.key) == "action")
      //     ?.actions || [],
      loading: false, // 表格加载
    });

    // 获取表格数据
    const refreshTableData = async (params = {}) => {
      params = {
        // pageNumber: state.pageOption.current,
        // pageSize: state.pageOption.pageSize,
        // ...props.pageOption,
        ...params,
      };
      state.loading = true;
      const {data, pageNumber, pageSize, total} = await props.getListFunc().finally(() => state.loading = false)
      // Object.assign(state.pageOption, {current: ~~pageNumber, pageSize: ~~pageSize, total: ~~total})
      state.data = data
    };

    refreshTableData();

    return {
      ...toRefs(state),
      refreshTableData
    };
  },
});
</script>

<style lang="scss" scoped>
</style>