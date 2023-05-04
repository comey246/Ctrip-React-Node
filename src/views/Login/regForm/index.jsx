import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import md5 from "js-md5";
import { setToken } from "@/redux/global/action.js";
import { loginPost, regPost } from "@/api/login.js";

import "./index.less";
import { Button, Checkbox, Form, Input, message, Radio } from "antd";
import {LockOutlined, UserOutlined,MailOutlined,MobileOutlined} from "@ant-design/icons";


const regForm = (props) => {
  const navigate = useNavigate();
  const { setToken } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {});

  const onFinish = async (regForm) => {
    try {
      console.log("Success:", regForm);
      const { confirm,password,...Form} = regForm;
      setLoading(true);
      const md5Password = md5(password);
      const data = await regPost({  password: md5Password,...Form});
      message.success("注册成功！");
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <div className="loginForm">
        {/* <h2>注册页面</h2> */}
        <Form
          name="reg"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                  message: "请输入用户名!",
              },{
                    pattern:new RegExp(/^[a-zA-Z0-9_-]{4,8}$/),message:'只允许数字、字母、下划线、短横线、4-8位'

                }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
                {
                    pattern:new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/),message:'必须包含数字、小大写字母、8-16位'
                }
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="密码"/>
          </Form.Item>
          <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                  {
                      required: true,
                      message: "请确认密码！",
                  },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('与输入的密码不匹配!'));
                  },
                }),
              ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="确认密码"/>
          </Form.Item>
          <Form.Item
              name="phone"
              rules={[
                {
                  required: false,
                  message: '请输入手机号!',
                },{
                      pattern:new RegExp(/^1[3-9]\d{9}$/),message:'请输入正确的手机号'
                  }
              ]}
          >
            <Input
                prefix={<MobileOutlined className="site-form-item-icon-maybe" />} placeholder="手机" />
          </Form.Item>
          <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: '请填写正确的邮箱!',
                },
                {
                  required: true,
                  message: '请输入邮箱!',
                },

              ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="邮箱"/>
          </Form.Item>
          <Form.Item
            label="权限"
            name="role"
            rules={[
              {
                required: true,
                message: "请选择角色！",
              },
            ]}
          >
            <Radio.Group optionType="button" buttonStyle="solid">
              <Radio value="user">普通用户</Radio>
              <Radio value="admin">管 理 员</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(regForm);
