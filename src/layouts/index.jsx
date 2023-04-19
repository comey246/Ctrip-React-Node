import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { updateCollapse } from "@/redux/menu/action";
import { connect } from "react-redux";
import { Layout, Space, theme } from "antd";
import LayoutMenu from "./Menu";
import LayoutFooter from "./Footer";
import LayoutHeader from "./Header";
import "./index.css";

const { Header, Footer, Sider, Content } = Layout;

const Index = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { isCollapse, updateCollapse } = props;
  return (
    <Fragment>
      <Layout style={{ minHeight: "100%" }}>
        <Sider
          // className="menu" // Add the menu class here
          trigger={null}
          breakpoint="xs"
          onBreakpoint={(broken) => {
            updateCollapse(broken);
          }}
          collapsed={isCollapse}
        >
          <LayoutMenu />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="fixed-header"
            style={{ background: colorBgContainer }}
          >
            <LayoutHeader />
          </Header>
          <Content
            className="custom-content"
            style={{ paddingBottom: "60px", background: colorBgContainer }}
          >
            <Outlet />
          </Content>
          <Footer className="custom-footer, fixed-footer">
            <LayoutFooter />
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(Index);
