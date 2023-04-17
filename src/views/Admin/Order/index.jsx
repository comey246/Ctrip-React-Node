import React, { Fragment,useState } from 'react'
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from '@/redux/global/action.js';
import './index.css'
import { Button, Checkbox, Form, Input,message } from 'antd';

const Index = (props) => {
    const navigate = useNavigate()
    const a = ()=> {
        navigate("/admin/user")
    }
  return (
    <Fragment>
        <div className="loginForm">
        <h2>管理员订单管理</h2></div>
        <button onClick={a}>adminuser</button>
    </Fragment>
 )
}

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Index);