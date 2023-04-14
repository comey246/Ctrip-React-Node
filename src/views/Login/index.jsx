import React, { Fragment } from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input,Space, Table, Tag } from 'antd';
import LoginForm from '@/views/Login/LoginForm'
import './index.css'

export default function index() {
  return (
    <Fragment>
        <div className="login">
        <LoginForm/>
        </div>
    </Fragment>
    )
}
