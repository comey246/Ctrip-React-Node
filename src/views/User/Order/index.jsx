import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import { UserOutlined } from "@ant-design/icons";
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
    title: "数量",
    dataIndex: "数量",
    key: "数量",
  },
  {
    title: "地址",
    dataIndex: "地址",
    key: "地址",
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
    商品名称: "John Brown",
    数量: 2,
    地址: "New York No. 1 Lake Park",
    金额: "2*price",
    description:
      "出发地,xxx,目的地:xxx,航班号:xxx,起飞时间:xxx,到达时间:xxx,用时:xxx,座位号:xxx",
  },
  {
    key: 2,
    商品名称: "Jim Green",
    数量: 1,
    地址: "New York No. 1 Lake Park",
    金额: "1*price",
    description:
      "出发地,xxx,目的地:xxx,航班号:xxx,起飞时间:xxx,到达时间:xxx,用时:xxx,座位号:xxx",
  },
  {
    key: 3,
    商品名称: "Not Expandable",
    数量: 3,
    地址: "New York No. 1 Lake Park",
    金额: "3*price",
    description:
      "出发地,xxx,目的地:xxx,航班号:xxx,起飞时间:xxx,到达时间:xxx,用时:xxx,座位号:xxx",
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
