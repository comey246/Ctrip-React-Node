import React from "react";
import { connect } from "react-redux";
import { updateCollapse } from "@/redux/menu/action";
import "./index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Input, Button, Space } from "antd";

const { Header } = Layout;
const Index = (props) => {
  const { isCollapse, updateCollapse } = props;
  return (
    <Header className="header">
      {React.createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => updateCollapse(!isCollapse),
      })}
      <div className="header-search">
        <Input
          placeholder="搜索"
          prefix={<SearchOutlined />}
          style={{ width: "500px" }}
        />
      </div>
      <Space className="header-actions">
        <Button type="link">登录</Button>
        <Button type="primary">注册</Button>
        <Button type="link" icon={<ShoppingCartOutlined />}>
          我的订单
        </Button>
      </Space>
    </Header>
  );
};
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(Index);
