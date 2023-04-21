import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

export const items = [
    {
        key: '/mall',
        icon: <UserOutlined/>,
        label: '商城',
        children: [
            {
                key: '/home/mall/index',
                icon: <UserOutlined/>,
                label: '首页',
            },
            {
                key: '/home/mall/hotel',
                icon: <UserOutlined/>,
                label: '酒店',
            },
            {
                key: '/home/mall/plane',
                icon: <UserOutlined/>,
                label: '机票',
            },
            {
                key: '/home/mall/ticket',
                icon: <UserOutlined/>,
                label: '门票',
            }
        ]
    },
    {
        key: '/home/user',
        icon: <UserOutlined/>,
        label: '我的',
        children: [
            {
                key: '/home/user/order',
                icon: <UserOutlined/>,
                label: '订单信息',
            }
        ]
    },
    {
        key: '/home/admin',
        icon: <VideoCameraOutlined/>,
        label: '管理',
        children: [
            {
                key: '/home/admin/order',
                icon: <UserOutlined/>,
                label: '订单管理',
            },
            {
                key: '/home/admin/user',
                icon: <UserOutlined/>,
                label: '用户管理',
            }
        ]
    },
]