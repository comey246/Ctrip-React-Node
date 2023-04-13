import React ,{Fragment} from 'react';
import {   MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined, } from '@ant-design/icons';
import { Divider, Menu, Switch,theme } from 'antd';
import { useState } from 'react';

const Index = (props) => {

    return (
        <Fragment>
            <div style={{border:"1px solid red",color:"red",height:"100%"}}><h2>这是侧边栏在layouts/menu</h2></div>

        </Fragment>
    )
};

export default Index;