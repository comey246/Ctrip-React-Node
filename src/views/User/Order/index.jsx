import React, { Fragment, useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import { deletOrder } from "@/api/mall.js";
import { UserOutlined } from "@ant-design/icons";

const LazyInfo = lazy(() => import("./Info"));
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
import { getOrder, getOrders } from "@/api/mall.js";

const Userorder = (props) => {
  const [del, setDel] = useState(false);
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
      render: (_, record) => <a onClick={() => delet(record.key)}>删除</a>,
    },
  ];
  const [data, setData] = useState([
    {
      key: 1,
      name: "机票",
      number: "f51684352",
      description: "",
    },
  ]);
  const getOrder = async (order) => {
    const { code, data } = await getOrder({ user_id: order });
    if (code === 200) {
      return data;
    }
  };
  const getmap = async () => {
    const { code, data } = await getOrders();
    const arr = [];
    data.forEach((e) => {
      const item = {
        key: e,
        name: "机票",
        number: e,
        description: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyInfo order={e} />
          </Suspense>
        ),
      };
      arr.push(item);
    });
    setData(arr);
  };
  useEffect(() => {
    getmap();
  }, [del]);
  const delet = async (e) => {
    const delMap = await deletOrder({ order_id: e });
    if (delMap.code === 200) {
      setDel(!del);
      return message.success("删除成功");
    }
  };
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
