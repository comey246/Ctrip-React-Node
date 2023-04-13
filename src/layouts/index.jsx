import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { updateCollapse } from "@/redux/menu/action";
import { connect } from "react-redux";
import {Layout, Space, theme} from "antd";
import LayoutMenu from "./Menu";
import LayoutFooter from "./Footer";
import LayoutHeader from "./Header";
import "./index.css";

const { Header, Footer, Sider, Content } = Layout;

const Index = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { isCollapse,updateCollapse } = props;
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
            <Sider trigger={null}
                   breakpoint="xs"
                   onBreakpoint={(broken) => {
                       // console.log(broken);
                       updateCollapse(broken)
                   }}
                   // onCollapse={(collapsed, type) => {
                   //     console.log(collapsed, type);
                   //     updateCollapse(collapsed)
                   // }}
                   collapsed={isCollapse}>

            <LayoutMenu />
        </Sider>
          <Layout className="site-layout">
              <Header
                  style={{
                      padding: 0,
                      background: colorBgContainer,
                  }}
              ><LayoutHeader />
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

const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps,mapDispatchToProps)(Index);

