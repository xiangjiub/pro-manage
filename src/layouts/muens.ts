export const list: any[] = [
    {
        path: "/about",
        name: 'About',
        meta: {
            title: "demo演示",
            icon: "icon-zhuomian",
            // hidden:false
        },
        children: [
            {
                path: "item",
                name: `About-item`,
                meta: {
                    title: "样式的扩展",
                    icon: "icon-zhuomian",
                }
            },
            {
                path: "form",
                name: `About-form`,
                meta: {
                    title: "验证表单",
                    icon: "icon-zhuomian",
                }
            },
            // {
            //     path: "icons",
            //     name: `About-icons`,
            //     meta: {
            //         title: "自定义图标",
            //         icon: "icon-zhuomian",
            //     }
            // },
            {
                path: "list",
                name: `About-list`,
                meta: {
                    title: "列表数据",
                    icon: "icon-zhuomian",
                }
            },
            {
                path: "loadlist",
                name: `About-loadlist`,
                meta: {
                    title: "远程列表数据",
                    icon: "icon-zhuomian",
                }
            },
            {
                path: "re-use",
                name: `About-re-use`,
                meta: {
                    title: "列表组件复用",
                    icon: "icon-zhuomian",
                }
            },
        ],
    },
    {
        path:"/system",
        name:"System",
        meta:{
            title: "系统管理",
            icon: "icon-shouye",
        },
        children:[
            {
                path: "role",
                name: `System-role`,
                meta: {
                    title: "角色管理",
                    icon: "icon-zhuomian",
                }
            },
        ]
    }
];