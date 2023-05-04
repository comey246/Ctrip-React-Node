import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {updateCollapse} from "@/redux/menu/action";
import Action from "@/layouts/Header/action";
import {setTheme} from "@/redux/global/action.js";
import "./index.less";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import {Layout, Input, Button, Select, Space, FloatButton, DatePicker, message} from "antd";

const {Header} = Layout;
const {Search} = Input;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {window.open("https://www.ctrip.com/")};
const selectBefore = (<Select defaultValue="hotel"
                              options={[
                                  {
                                      value: 'hotel',
                                      label: '酒店',
                                  },
                                  {
                                      value: 'plane',
                                      label: '机票',
                                  },
                                  {
                                      value: 'ticke',
                                      label: '门票',
                                  },
                                  {
                                      value: 'gpt',
                                      label: 'GPT',
                                  },
                              ]}
/>)
const Index = (props) => {
    const {isCollapse, updateCollapse,setTheme,theme} = props;
    return (
        <Fragment>
        <Header className="header">
            <div className="search">
                <Search addonBefore={selectBefore} placeholder="搜索酒店/机票/门票" size={"large"} onSearch={onSearch} enterButton/>
                <Action/>
            </div>
        </Header>
    <FloatButton.Group shape="circle" style={{ left: "10px"}}>
        <FloatButton className="top-button" icon={theme?<span style={{position:"relative",left:-2}}>🌜</span>:<span style={{position:"relative",left:-2}}>🌞</span>} onClick={()=>setTheme(!theme)}/>
        <FloatButton className="top-button"
            icon={isCollapse ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => updateCollapse(!isCollapse)}
        />
        <FloatButton.BackTop className="top-button" visibilityHeight={0} />

    </FloatButton.Group>
        </Fragment>
    );
};
const mapStateToProps = (state) => ({...state.menu,...state.global});
const mapDispatchToProps = {updateCollapse,setTheme};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
