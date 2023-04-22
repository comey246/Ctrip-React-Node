import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import { Button, Checkbox, Form, Input, message, Table } from "antd";

const columns = [
  {
    title: "用户",
    dataIndex: "用户",
    key: "用户",
  },
  {
    title: "商品名称",
    dataIndex: "商品名称",
    key: "商品名称",
  },
  {
    title: "数量",
    dataIndex: "数量",
    key: "数量",
  },

  {
    title: "金额",
    dataIndex: "金额",
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
    用户: "a",
    商品名称: "John Brown",
    数量: 2,

    金额: "2*price",
    description: "备注信息、地址",
  },
  {
    key: 2,
    用户: "b",
    商品名称: "Jim Green",
    数量: 42,

    金额: "2*price",
    description: "备注信息、地址",
  },
  {
    key: 3,
    用户: "c",
    商品名称: "Not Expandable",
    数量: 29,

    金额: "2*price",
    description: "备注信息、地址",
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
      ;
      {/* <div className="loginForm">
        <h2>管理员订单管理</h2>
      </div>
      <button onClick={a}>adminuser</button> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminorder);
