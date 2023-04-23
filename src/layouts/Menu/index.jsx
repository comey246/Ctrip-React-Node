import React, { Fragment, useState,useEffect } from "react";
import { Menu, Spin, FloatButton } from "antd";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setMenuList } from "@/redux/menu/action";
import {setAuthRouter} from "@/redux/auth/action.js";
import { getMenuList } from "@/api/login";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import { searchRoute } from "@/utils/util.js";
import "./index.less";
import global from "@/redux/global/reducer.js";
import {setToken, setUsername} from "@/redux/global/action.js";


const icon = {UserOutlined:<UserOutlined/>,VideoCameraOutlined:<VideoCameraOutlined/>}
const menuAarray = (data)=>{
  const arr = []
  const path = []
  for(let item of data){
    arr.push(find(item))
  }
  return {arr, path}
  function find(item){
    const node = { key: item.key,
      icon: icon[item.icon],
      label: item.label}
      path.push(item.key)
    if(item.children){
      node.children =[]
      for(let item1 of item.children){
        node.children.push(find(item1))
      }
    }
    return node
  }
}

const routerArry = (data)=>{
  const arr = []
  for(let item of data){
    arr.push(find(item))
  }
  return arr
  function find(item){
    const node = { key: item.key,
      icon: icon[item.icon],
      label: item.label}
    if(item.children){
      node.children =[]
      for(let item1 of item.children){
        node.children.push(find(item1))
      }
    }
    return node
  }
}

// 点击当前菜单跳转页面
const Index = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {isCollapse,isMobile,setMenuList,setAuthRouter} = props;
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);


  const getMenuData = async () => {
    setLoading(true);
    try {
      const { data } = await getMenuList();
      if (!data) return;
      const {arr,path} = menuAarray(data)
      setMenu(arr);
      setMenuList(data);
      // setMenuList(deepLoopFloat(data));
      // // 存储处理过后的所有面包屑导航栏到 redux 中
      // setBreadcrumbList(findAllBreadcrumb(data));
      // // 把路由菜单处理成一维数组，存储到 redux 中，做菜单权限判断
      // const dynamicRouter = handleRouter(data);
      setAuthRouter(path);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location]);
  useEffect(() => {
    getMenuData();
  }, []);
  const selectMenu = (key) => {
    console.log(key);
    navigate(key.key);
    // const route = searchRoute(key, props.menuList);
    // if (route.isLink) window.open(route.isLink, "_blank");
    // navigate(key);
    // (isMobile?" collapse":isCollapse?" collapse":"")
  };

  return (
    <Fragment>
      <div className={"logo" + (isMobile?" collapse":isCollapse?" collapse":"")} />
      <Spin spinning={loading} tip="Loading...">
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          defaultSelectedKeys={["/home/mall/index"]}
          items={menu}
          onClick={selectMenu}
        />
      </Spin>
    </Fragment>
  );
};
const mapStateToProps = (state) => (state.menu);
const mapDispatchToProps = {setMenuList,setAuthRouter};
export default connect(mapStateToProps,mapDispatchToProps)(Index);
