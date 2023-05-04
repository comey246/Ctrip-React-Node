import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";

import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import {Table} from "antd";
import {getUsersMap} from "@/api/user.js";

const LazyInfo = lazy(() => import('./Info'));
const Adminuser = (props) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const openTable = (record) => {
    if(expandedRowKeys[0] === record.key) {
      setExpandedRowKeys([]);
    }
    else {
      setExpandedRowKeys([record.key]);
    }
  };
  const [items,setItems] = useState([
    {
      key: 1,
      name: "John Brown",
      number: "f51684352",
      description: "",
    },
  ])
  const getmap = async () => {
    const {code, data} = await getUsersMap();
    const keys = Object.keys(data)
    const arr = []
    keys.forEach((key) => {
      const item = {
        key: data[key],
        name: key,
        number: data[key],
        description: <Suspense fallback={<div>Loading...</div>}>
          <LazyInfo id={data[key]} name={key} />
        </Suspense>
      }
      arr.push(item)
    })
    setItems(arr)
  }
  useEffect(() => {
    getmap();

  }, [])
  const columns = [
    {
      title: "用户名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ID编号",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "用户操作",
      dataIndex: "",
      key: "x",
      // render: (_, record) => <a  onClick={() => delet(record.key)}>删除</a>,
      render: (_, record) => (<div><a onClick={()=>openTable(record)}>详情</a> | <sapn style={{color:"gray"}}>删除</sapn></div>),
    },
  ];
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
          expandedRowKeys
        }}
        dataSource={items}
      />
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminuser);
