import React, {Fragment,useState} from 'react';
import { Menu,Spin} from "antd";
import {connect} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {items} from "@/layouts/Menu/menuList.jsx";
import { setMenuList } from "@/redux/menu/action";
import { menuListGet } from "@/api/login";
import {searchRoute} from "@/utils/util.js";
import './index.css'

// 点击当前菜单跳转页面
const Index = (props) => {

    const getMenuData = async () => {
        setLoading(true);
        try {
            const { data } = await getMenuList();
            if (!data) return;
            setMenuList(deepLoopFloat(data));
            // 存储处理过后的所有面包屑导航栏到 redux 中
            setBreadcrumbList(findAllBreadcrumb(data));
            // 把路由菜单处理成一维数组，存储到 redux 中，做菜单权限判断
            const dynamicRouter = handleRouter(data);
            setAuthRouter(dynamicRouter);
            setMenuListAction(data);
        } finally {
            setLoading(false);
        }
    };
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const selectMenu = (key) => {
        console.log(key)
        navigate(key.key)
        // const route = searchRoute(key, props.menuList);
        // if (route.isLink) window.open(route.isLink, "_blank");
        // navigate(key);
    };

    return (
        <Fragment>
            <div className="logo" />
            <Spin spinning={loading} tip="Loading...">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    items={items}
                    onClick={selectMenu}
                />
            </Spin>
        </Fragment>
    )
};

export default connect()(Index);