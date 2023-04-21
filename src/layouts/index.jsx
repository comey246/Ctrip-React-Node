import React, {Fragment, useState} from "react";
import {Outlet} from "react-router-dom";
import {setMobile, updateCollapse} from "@/redux/menu/action";
import {connect} from "react-redux";
import {Layout, Space, theme,Affix} from "antd";
import LayoutMenu from "./Menu";
import LayoutFooter from "./Footer";
import LayoutHeader from "./Header";
import "./index.less";

const {Header, Footer, Sider, Content} = Layout;

const Index = (props) => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {isCollapse,isMobile, updateCollapse,setMobile} = props;
    const [top] = useState(0);
    return (
        <Fragment>
            <Layout
                style={{ minHeight: "100%" }}
            >
                <Sider
                    trigger={null}
                    breakpoint="md"
                    onBreakpoint={(broken) => {
                        updateCollapse(broken);
                        setMobile(broken);
                    }}
                    collapsed={isMobile?true:isCollapse}
                    collapsedWidth={isMobile?isCollapse?0:60:60}
                >
                    <Affix offsetTop={top}>
                    <LayoutMenu/>
                    </Affix>
                </Sider>
                <Layout
                >
                    <div>
                        <Affix offsetTop={top}>
                        <LayoutHeader/>
                    </Affix>
                    </div>
                    <Content
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
const mapDispatchToProps = {updateCollapse,setMobile};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
