import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import {Button, Checkbox, DatePicker, Form, Input, message, Table} from "antd";
import Info from "@/views/Admin/User/Info";
import {getUsersMap} from "@/api/admin.js";

const LazyInfo = lazy(() => import('./Info'));
const Adminuser = (props) => {
  // const [del,setDel] = useState(false)
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
      title: "删除用户",
      dataIndex: "",
      key: "x",
      // render: (_, record) => <a  onClick={() => delet(record.key)}>删除</a>,
      render: () => <a>删除</a>,
    },
  ];

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

  // const delet = async (e)=>{
  //   const delMap = await deletOrder({order_id:e})
  //   if (delMap.code ===200){return message.success('删除成功')
  //     setDel(!del)
  //   }
  // }

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
        dataSource={items}
      />
      {/* <div className="loginForm">
        <h2>管理员用户管理页面</h2>
        <button onClick={a}>mall</button>
      </div> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminuser);
