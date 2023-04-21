import React, {Fragment, useState} from "react";
import {Outlet} from "react-router-dom";
import {updateCollapse} from "@/redux/menu/action";
import {connect} from "react-redux";
import {Layout, Space, theme,Affix} from "antd";
import LayoutMenu from "./Menu";
import LayoutFooter from "./Footer";
import LayoutHeader from "./Header";
import "./index.css";

const {Header, Footer, Sider, Content} = Layout;

const Index = (props) => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {isCollapse, updateCollapse} = props;
    const [top] = useState(0);
    return (
        <Fragment>
            <Layout
                // style={{ minHeight: "100%" }}
            >
                <Sider
                    // className="menu" // Add the menu class here
                    trigger={null}
                    breakpoint="xs"
                    onBreakpoint={(broken) => {
                        updateCollapse(broken);
                    }}
                    collapsed={isCollapse}
                    collapsedWidth="60"
                >
                    <Affix offsetTop={top}>
                    <LayoutMenu/>
                    </Affix>
                </Sider>
                <Layout
                >
                    <Header
                        // className="fixed-header"
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Affix offsetTop={top}>
                        <LayoutHeader/>
                    </Affix>
                    </Header>
                        {/*<div style={{*/}
                        {/*    height:"5px",*/}
                        {/*}}></div>*/}
                    <Content
                        // className="custom-content"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet/>
                    </Content>
                    <Footer
                        style={{
                            padding: 20,
                        }}
                    >
                        <LayoutFooter/>
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    );
};

const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = {updateCollapse};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
