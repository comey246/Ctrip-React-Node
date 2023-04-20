import React, {useState} from "react";
import {connect} from "react-redux";
import {updateCollapse} from "@/redux/menu/action";
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
    if(login) return (

            <div style={{padding:"10px",display:"flex",flexDirection:"column"}}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomRight"
                    arrow
                >
                    <Avatar style={{}}><UserOutlined/></Avatar>
                </Dropdown>
                <span style={{lineHeight:"18px",  fontSize: "18px"}}>user</span>
            </div>

    );
    else return (
        <Space className="header-actions">
            <Button type="link">登录</Button>
            <Button type="primary">注册</Button>
        </Space>
    )
};
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = {updateCollapse};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
