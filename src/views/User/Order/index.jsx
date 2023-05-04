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
  Space, Spin,
} from "antd";
import { getOrder, getOrders } from "@/api/mall.js";
import {cores} from "node-forge/lib/util.js";

const Userorder = (props) => {
  const [del, setDel] = useState(false);
  const [loading,setLoading] = useState(false)
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const openTable = (record) => {
    if(expandedRowKeys[0] === record.key) {
      setExpandedRowKeys([]);
    }
    else {
      setExpandedRowKeys([record.key]);
    }
  };
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
      title: "订单操作",
      dataIndex: "",
      key: "x",
      render: (_, record) => (<div><a onClick={()=>openTable(record)}>详情</a> | <a onClick={() => delet(record.key)}>删除</a></div>),
    },
  ];
  const [data, setData] = useState([
    {
      key: 1,
      name: "无记录",
      number: "空空如也",
      description: "别找了",
    },
  ]);
  const getOrder = async (order) => {
    const { code, data } = await getOrder({ user_id: order });
    if (code === 200) {
      return data;
    }
  };
  const getMap = async () => {
    setLoading(true)
    try {
      const { code, data } = await getOrders();
      const arr = [];
      console.log(data)
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
    }finally {
      setLoading(false)
    }

  };
  useEffect(() => {
    getMap();
  }, [del]);
  const delet = async (e) => {
    const delMap = await deletOrder({ order_id: e });
    if (delMap.code === 200) {
      setDel(!del);
      message.success("删除成功");
    }
  };
  return (
    <Fragment>
      <Spin spinning={loading} tip="Loading...">
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
          rowExpandable: (record) => {
            return record.name !== "Not Expandable"
          },
          expandedRowKeys

        }}
        dataSource={data}
      /></Spin>
    </Fragment>

  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Userorder);
