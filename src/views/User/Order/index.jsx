import React, {Fragment, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import { UserOutlined } from "@ant-design/icons";
import Info from "@/views/User/Order/Info";
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Table,
  Avatar,
  Space,
} from "antd";

const columns = [
  {
    title: "商品名称",
    dataIndex: "name",
    key: "商品名称",
  },
  {
    title: "订单编号",
    dataIndex: "number",
    key: "订单编号",
  },
  {
    title: "删除订单",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "机票",
    number: "f51684352",
    description: <Info />,
  },
];

const Userorder = (props) => {
  // useEffect()
  //   const navigate = useNavigate();
  //   const a = () => {
  //     navigate("/admin/order");
  //   };
  return (
    <Fragment>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <div
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </div>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
      {/* <div className="loginForm">
        <h2>用户订单信息</h2>
        <button onClick={a}>order</button>
      </div> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Userorder);
