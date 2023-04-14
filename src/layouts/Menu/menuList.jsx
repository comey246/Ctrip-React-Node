import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

export const items = [
    {
        key: 'mall',
        icon: <UserOutlined/>,
        label: '商城',
    },
    {
        key: 'user',
        icon: <UserOutlined/>,
        label: '我的',
        children: [
            // {
            //     key: 'car',
            //     icon: <UserOutlined/>,
            //     label: '购物车',
            // },
            {
                key: 'userorder',
                icon: <UserOutlined/>,
                label: '订单信息',
            }
        ]
    },
    {
        key: 'admin',
        icon: <VideoCameraOutlined/>,
        label: '管理',
        children: [
            {
                key: 'adminorder',
                icon: <UserOutlined/>,
                label: '订单管理',
            },
            {
                key: 'adminuser',
                icon: <UserOutlined/>,
                label: '用户管理',
            }
        ]
    },
]