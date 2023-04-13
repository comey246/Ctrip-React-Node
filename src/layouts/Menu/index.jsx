import React, {Fragment} from 'react';
import { Menu} from "antd";
import {connect} from "react-redux";
import './index.css'
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const items = [
    {
        key: 'mall',
        icon: <UserOutlined/>,
        label: '商城',
    },
    {
        key: 'sub1',
        icon: <UserOutlined/>,
        label: '我的',
        children: [
            // {
            //     key: 'car',
            //     icon: <UserOutlined/>,
            //     label: '购物车',
            // },
            {
                key: 'info',
                icon: <UserOutlined/>,
                label: '订单信息',
            }
        ]
    },
    {
        key: 'sub2',
        icon: <VideoCameraOutlined/>,
        label: '后台管理',
        children: [
            {
                key: 'adminInfo',
                icon: <UserOutlined/>,
                label: '订单管理',
            },
            {
                key: 'adminUser',
                icon: <UserOutlined/>,
                label: '用户管理',
            }
        ]
    },
]
const Index = (props) => {
    return (
        <Fragment>
            <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    items={items}
                />
        </Fragment>
    )
};

export default connect()(Index);