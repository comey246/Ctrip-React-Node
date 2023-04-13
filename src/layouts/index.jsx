import React, {Fragment} from 'react'
import {Outlet} from "react-router-dom";
import {Layout, Space} from 'antd';
import LayoutMenu from './Menu'
import LayoutFooter from './Footer'
import LayoutHeader from './Header'
const {Header, Footer, Sider, Content, Button, Menu} = Layout;
import './index.css'

const Index = (props) => {

    return (
        <Fragment>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
                size={[0, 48]}
            >
                <Layout>
                    <Sider>
                        <LayoutMenu/>
                    </Sider>
                    <Layout>
                        <Header><LayoutHeader/></Header>
                        <Content>这是Content包含路由组件<Outlet/></Content>
                        <Footer><LayoutFooter/></Footer>
                    </Layout>
                </Layout>
            </Space>
        </Fragment>
    )
}
export default Index