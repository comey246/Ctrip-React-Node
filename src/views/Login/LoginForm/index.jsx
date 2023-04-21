import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken,setUsername } from "@/redux/global/action.js";
import { setMenuList } from "@/redux/menu/action.js";
import { loginPost, publickKeyGet } from "@/api/login.js";
import { encodePassword } from "@/utils/util.js";
import "./index.css";
import { Button, Checkbox, Form, Input, message } from "antd";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const { setToken,setUsername } = props;
  const [loading, setLoading] = useState(false);
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
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
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
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" loading={loading} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = { setToken, setMenuList,setUsername };
export default connect(null, mapDispatchToProps)(LoginForm);
