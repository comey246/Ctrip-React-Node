import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken,setUsername } from "@/redux/global/action.js";
import { setMenuList } from "@/redux/menu/action.js";
import { loginPost, publickKeyGet } from "@/api/login.js";
import { encodePassword } from "@/utils/util.js";
import {UserOutlined,LockOutlined} from "@ant-design/icons";
import "./index.less";
import {Button, Checkbox, DatePicker, Form, Input, message} from "antd";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const { setToken,setUsername,username } = props;
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [initusername, setInitusername] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const warning = (massage) => {
    messageApi.open({
      type: "warning",
      content: massage,
    });
  };
  const onFinish = async (loginForm) => {
    try {
      const { username, password, remember } = loginForm;
      setRemember(remember)
      setLoading(true);
      const keyRes = await publickKeyGet({ username });
      const publicKeyPem = keyRes.data?.publicKey;
      const encryptedBase64 = encodePassword(publicKeyPem, password);
      const { data } = await loginPost({ username, password: encryptedBase64 });
      setToken(data?.access_token);
      setUsername(data?.username);
      navigate("/home/mall");
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      {contextHolder}
      <div className="loginForm">
        <Form
          name="login"
          initialValues={{
            username,
            remember,
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
              },
              {
                pattern:new RegExp(/^[a-zA-Z0-9_-]{4,8}$/),message:'只允许数字、字母、下划线、短横线、4-8位'

              }
            ]}
          >
            <Input  prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="用户名"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
              {
                pattern:new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/),message:'必须包含数字、小大写字母、8-16位'
              }
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
          </Form.Item>

          {/*<Form.Item*/}
          {/*  name="remember"*/}
          {/*  valuePropName="checked"*/}
          {/*  wrapperCol={{*/}
          {/*    offset: 9,*/}
          {/*    span: 5,*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Checkbox>记住我</Checkbox>*/}
          {/*</Form.Item>*/}
          <Form.Item

          >
            <Button type="primary" htmlType="submit" className="login-form-button">
              登 录
            </Button>
          </Form.Item>
        </Form>
        </div>
    </Fragment>
  );
};
const mapStateToProps = (state)=>(state.global)
const mapDispatchToProps = { setToken, setMenuList,setUsername };
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
