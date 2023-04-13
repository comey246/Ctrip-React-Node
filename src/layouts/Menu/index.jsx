import React, {Fragment} from 'react';
import { Menu} from "antd";
import {connect} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {items} from "@/layouts/Menu/menuList.jsx";
import {searchRoute} from "@/utils/util.js";
import './index.css'

// 点击当前菜单跳转页面
const Index = (props) => {
    const navigate = useNavigate();
    const selectMenu = (key) => {
        console.log(key)
        // const route = searchRoute(key, props.menuList);
        // if (route.isLink) window.open(route.isLink, "_blank");
        // navigate(key);
    };

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