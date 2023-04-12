import React, { Fragment } from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input,Space, Table, Tag } from 'antd';
import LoginForm from '@/components/LoginForm'

export default function index() {
    const navigate = useNavigate()
    const goHome = () => navigate('/home/index')
  return (
    <Fragment>
        <div style={{border:"5px solid yellow"}}>
            <h2>user</h2>
        </div><Button onClick={goHome}>gohome</Button>
    </Fragment>
    )
}
