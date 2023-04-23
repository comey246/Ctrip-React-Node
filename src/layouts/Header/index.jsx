import React, {useState} from "react";
import {connect} from "react-redux";
import {updateCollapse} from "@/redux/menu/action";
import Action from "@/layouts/Header/action";
import "./index.less";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    QuestionCircleOutlined, SyncOutlined
} from "@ant-design/icons";
import {Layout, Input, Button, Select, Space, FloatButton} from "antd";

const {Header} = Layout;
const {Search} = Input;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => console.log(value);
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
    const {isCollapse, updateCollapse} = props;
    return (
        <Header className="header">
            <div className="search">
                <Search addonBefore={selectBefore} placeholder="搜索酒店/机票/门票" size={"large"} onSearch={onSearch} enterButton/>
            <Action/>
            </div>
            <FloatButton.Group shape="circle" style={{ left: 10 }}>
                <FloatButton
                    icon={isCollapse ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                    onClick={() => updateCollapse(!isCollapse)}
                />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
        </Header>
    );
};
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = {updateCollapse};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
