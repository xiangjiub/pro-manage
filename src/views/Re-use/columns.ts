import { TableColumn } from "@/types/tableColumn";

export const columns: TableColumn[] = [ // 角色列表
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
    }
]
