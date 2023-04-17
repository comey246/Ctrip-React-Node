import React, { Fragment,useState } from 'react'
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from '@/redux/global/action.js';
import './index.css'
import { Button, Checkbox, Form, Input,message } from 'antd';

const Index = (props) => {
    const navigate = useNavigate()
    const a = ()=> {
        navigate("/admin/order")
    }
  return (
    <Fragment>
        <div className="loginForm">
        <h2>用户订单信息</h2>
            <button onClick={a}>order</button>
        </div>
    </Fragment>
 )
}

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Index);