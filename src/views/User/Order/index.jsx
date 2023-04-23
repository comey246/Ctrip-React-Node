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
    商品名称: "John Brown",
    订单编号: 2,
    description:
      "出发地,xxx,目的地:xxx,航班号:xxx,起飞时间:xxx,到达时间:xxx,用时:xxx,座位号:xxx",
  },
  {
    key: 2,
    商品名称: "Jim Green",
    订单编号: 1,
    description:
      "出发地,xxx,目的地:xxx,航班号:xxx,起飞时间:xxx,到达时间:xxx,用时:xxx,座位号:xxx",
  },
  {
    key: 3,
    商品名称: "Not Expandable",
    订单编号: s1234565789,
    description: <Info />,
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
      ;
      {/* <div className="loginForm">
        <h2>用户订单信息</h2>
        <button onClick={a}>order</button>
      </div> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Userorder);
