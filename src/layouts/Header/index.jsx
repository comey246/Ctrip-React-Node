import React, {useState} from "react";
import {connect} from "react-redux";
import {updateCollapse} from "@/redux/menu/action";
import Action from "@/layouts/Header/action";
import "./index.css";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import {Layout, Input, Button, Space, Affix, Dropdown,Avatar} from "antd";

const {Header} = Layout;
const {Search} = Input;
const onSearch = (value) => console.log(value);
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                购物车
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                订单信息
            </a>
        ),
    }
];
const Index = (props) => {
    const {isCollapse, updateCollapse} = props;
    const login = true
    const [top] = useState(15);
    return (
        <Header className="header">
            <div>
                <Button
                    type="text"
                    icon={isCollapse ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                    onClick={() => updateCollapse(!isCollapse)}
                    className="trigger"
                />
            </div>
            <div className="header-search">
                    <div style={{height:"30px"}}>                </div>
                    <Search placeholder="搜索" onSearch={onSearch} enterButton />
            </div>
            <Action/>
        </Header>
    );
};
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = {updateCollapse};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
