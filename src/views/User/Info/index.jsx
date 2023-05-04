import {  Descriptions } from "antd";
import {useEffect, useState} from "react";

import {getInfo} from "@/api/user.js";
import {setToken} from "@/redux/global/action.js";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps.js";
const Info = (props) => {
  const {username} =props
  const [user,setUser] = useState({})
  const role = {
    user:"用户",
    admin:"管理员"
  }
  const getOrderInfo = async ()=>{
    const {code,data}= await getInfo();
    if(code===200){
      setUser(data)
    }
  }
  useEffect(()=>{
    getOrderInfo();
  },[])
  return(
      <Descriptions
          title="用户详情"
          layout="vertical"
          bordered
          style={{ backgroundColor: "transparent" }}
      >
        <Descriptions.Item label="用户名"><span style={{fontSize:18}}>{username}</span></Descriptions.Item>
        <Descriptions.Item label="昵称">海盐荔枝</Descriptions.Item>
        <Descriptions.Item label="手机号">{user.phone}</Descriptions.Item>
        <Descriptions.Item label="性别">女</Descriptions.Item>
        <Descriptions.Item label="ID编号">{user.id}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
        <Descriptions.Item label="权限"><span style={{color:"rgb(255,86,86)",fontSize:16}}>{role[user.role]}</span></Descriptions.Item>
        <Descriptions.Item label="注册天数">365</Descriptions.Item>
        <Descriptions.Item label="总消费额">2400</Descriptions.Item>
        <Descriptions.Item label="用户档案">
          用户爱好: 旅行
          <br />
          职业: 学生
          <br />
          常住地: 上海徐汇
          <br />
        </Descriptions.Item>
      </Descriptions>
  );}
const mapStateToProps = state =>(state.global)
const mapDispatchToProps = { setToken };
export default connect(mapStateToProps)(Info);