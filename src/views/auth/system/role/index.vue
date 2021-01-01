<template>
    <basic-table ref="tableRef" :columns="columns" :get-list-func="getAdminRole" :row-selection="rowSelection" rowKey="id">
        <template v-slot:title>
            <a-button  type="primary">
                添加
            </a-button>
            <a-button   :disabled="isDisabled" type="primary">
                删除
            </a-button>
        </template>
    </basic-table>
    <!-- <basic-table @register="registerTable">
        
    </basic-table> -->
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
// import {DynamicTable} from '@/components/dynamic-table'
import {getAdminRole} from '@/api/system/role/index'
import {BasicTable} from '@/components/Table/src/index'
import {columns} from './columns'
export default defineComponent({
    components:{
        // DynamicTable,
        BasicTable
    },
    setup(){
        const tableRef = ref<any>(null)
        
        const state = reactive({
            tableLoading: false,
            rowSelection: {
                onChange: (selectedRowKeys, selectedRows) => {
                state.rowSelection.selectedRowKeys = selectedRowKeys;
                },
                selectedRowKeys: []
            },
        })
        const isDisabled = computed(() => state.rowSelection.selectedRowKeys.length == 0)

        return{
            ...toRefs(state),
            columns,
            getAdminRole,
            tableRef,
            isDisabled
        }
    }
})
</script>

<style lang="scss" scoped>

</style>