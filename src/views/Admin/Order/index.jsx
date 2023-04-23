import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.less";
import { Button, Checkbox, Form, Input, message, Table } from "antd";
import Info from "@/views/Admin/Order/Info";
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
    number: "f2356415",
    description: <Info />,
  },
  {
    key: 2,
    name: "机票",
    number: "f15634865123",
    description: <Info />,
  },
  {
    key: 3,
    name: "机票",
    number: "s853153153",
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
        <h2>管理员订单管理</h2>
      </div>
      <button onClick={a}>adminuser</button> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminorder);
