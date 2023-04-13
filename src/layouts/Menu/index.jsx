import React, {Fragment} from 'react';
import { Menu} from "antd";
import {connect} from "react-redux";
import {items} from "@/layouts/Menu/menuList.jsx";
import './index.css'

// 点击当前菜单跳转页面
const navigate = useNavigate();
const selectMenu = (key) => {
    const route = searchRoute(key, props.menuList);
    if (route.isLink) window.open(route.isLink, "_blank");
    navigate(key);
};
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
                    onClick={selectMenu}
                />
        </Fragment>
    )
};

export default connect()(Index);