import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Space, theme } from "antd";
import LayoutMenu from "./Menu";
import LayoutFooter from "./Footer";
import LayoutHeader from "./Header";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content, Button, Menu } = Layout;
import "./index.css";

const Index = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Fragment>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />aaa
            <LayoutMenu />
          </Sider>
          <Layout className="site-layout">
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <LayoutHeader />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >

              <Outlet />
            </Content>
            <Footer
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 200,
                background: colorBgContainer,
              }}
            >
              <LayoutFooter />
            </Footer>
          </Layout>
        </Layout>
      </Space>
    </Fragment>
  );
};
export default Index;
