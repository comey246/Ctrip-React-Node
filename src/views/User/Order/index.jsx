import React, { Fragment, useState } from "react";
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
    title: "数量",
    dataIndex: "number",
    key: "数量",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "地址",
  },
  {
    title: "金额",
    dataIndex: "price",
    key: "金额",
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
    name: "John Brown",
    number: 2,
    address: "New York No. 1 Lake Park",
    price: "2*price",
    description:
      <Info/>,
  },

];

const Userorder = (props) => {
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
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
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
