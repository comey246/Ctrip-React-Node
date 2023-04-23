import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken,setUsername } from "@/redux/global/action.js";
import { setMenuList } from "@/redux/menu/action.js";
import { loginPost, publickKeyGet } from "@/api/login.js";
import { encodePassword } from "@/utils/util.js";
import "./index.less";
import { Button, Checkbox, Form, Input, message } from "antd";

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
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            username,
            remember,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 10,
              span: 5,
            }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item
              wrapperCol={{
                offset: 10,
                span: 4,
              }}
          >
            <Button type="primary" loading={loading} htmlType="submit">
              登录
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
