<template>
  <a-button type="primary" @click="loadData"> 查询 </a-button>
  <!-- <a-table
    :columns="columns"
    :row-key="(record) => record.login.uuid"
    :data-source="listdata"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #name="{ text }"> {{ text.first }} {{ text.last }} </template>
  </a-table> -->
  <a-table :columns="columns" :data-source="listdata" :loading="loading">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import api from "@/api/index";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const loading = ref(false);
    const columns = reactive([
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        slots: { customRender: "name" },
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 80,
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address 1",
        ellipsis: true,
      },
      {
        title: "Long Column Long Column Long Column",
        dataIndex: "address",
        key: "address 2",
        ellipsis: true,
      },
      {
        title: "Long Column Long Column",
        dataIndex: "address",
        key: "address 3",
        ellipsis: true,
      },
      {
        title: "Long Column",
        dataIndex: "address",
        key: "address 4",
        ellipsis: true,
      },
    ]);
    const state = reactive({listdata:[]});
    // const loadData = async () => {
    //   loading.value = true;
    //   const { code, data, message: msg } = await store
    //     .dispatch("user/Userlist")
    //     .finally(() => {
    //       loading.value = false;
    //       console.log("掉用了userlist");
    //     });

    //   if (code == 200) {
    //     listdata = Object.assign([], data);
    //     console.log(listdata);
    //     // message.success('登录成功！')
    //     // router.push("/home");
    //   } else {
    //     // message.info(msg || '登录失败')
    //   }
    // };

    const loadData = async () => {
          loading.value = true;
      const { code, data, message: msg } = await store
        .dispatch("user/Userlist")
        .finally(() => {
          loading.value = false;
          console.log("掉用了userlist");
        });

      if (code == 200) {
        state.listdata = Object.assign([], data);
        // console.log(listdata);
        // message.success('登录成功！')
        // router.push("/home");
      } else {
        // message.info(msg || '登录失败')
      }
    }

    loadData()
    
    return {
      loadData,
      ...toRefs(state),
      columns,
      loading,
    };
  },
});
</script>

<style lang="scss">
</style>