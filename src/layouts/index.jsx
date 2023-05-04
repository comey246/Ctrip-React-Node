import React, {Fragment, useState} from "react";
import {Outlet} from "react-router-dom";
import {setMobile, updateCollapse} from "@/redux/menu/action";
import {connect} from "react-redux";
import {Layout, Space, theme, Affix, FloatButton} from "antd";
import LayoutMenu from "./Menu";
import LayoutFooter from "./Footer";
import LayoutHeader from "./Header";
import {setTheme} from "@/redux/global/action.js";
import "./index.less";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const {Footer, Sider, Content} = Layout;

const Index = (props) => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {isCollapse,isMobile, updateCollapse,setMobile,setTheme} = props;
    const Theme = props.theme
    const [top] = useState(0);
    return (
        <Fragment>
            <Layout
                className={Theme?"layout layout-dark":"layout"}
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
                    className="side-layout"
                >
                    <Affix offsetTop={top}>
                    <LayoutMenu/>
                    </Affix>
                </Sider>
                <Layout
                    className="right-layout"
                >
                        <Affix offsetTop={top}>
                        <LayoutHeader/>
                    </Affix>
                    <Content
                        className="content"
                    >
                        <Outlet/>
                    </Content>
                    <Footer
                        style={{
                            padding: 20,

                        }}
                        className="footer"
                    >
                        <LayoutFooter/>
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    ...state.menu,...state.global
});
const mapDispatchToProps = {updateCollapse,setMobile,setTheme};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
