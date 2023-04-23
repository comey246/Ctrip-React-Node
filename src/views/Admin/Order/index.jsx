import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import { Button, Checkbox, Form, Input, message, Table } from "antd";
import Info from "@/views/Admin/Order/Info";
const columns = [
  {
    title: "商品名称",
    dataIndex: "商品名称",
    key: "商品名称",
  },
  {
    title: "订单编号",
    dataIndex: "订单编号",
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
    商品名称: "机票",
    订单编号: "f2356415",
    description: "备注信息、地址",
  },
  {
    key: 2,
    商品名称: "机票",
    订单编号: "f15634865123",
    description: "备注信息、地址",
  },
  {
    key: 3,
    商品名称: "机票",
    订单编号: "s853153153",
    description: <Info />,
  },
];

const Adminorder = (props) => {
  //   const navigate = useNavigate();
  //   const a = () => {
  //     navigate("/admin/user");
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
        <h2>管理员订单管理</h2>
      </div>
      <button onClick={a}>adminuser</button> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminorder);
