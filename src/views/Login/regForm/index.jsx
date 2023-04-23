import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import md5 from "js-md5";
import { setToken } from "@/redux/global/action.js";
import { loginPost, regPost } from "@/api/login.js";
import { encodePassword } from "@/utils/util.js";
import "./index.css";
import { Button, Checkbox, Form, Input, message, Radio } from "antd";
const regForm = (props) => {
  const navigate = useNavigate();
  const { setToken } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {});

  const onFinish = async (regForm) => {
    try {
      console.log("Success:", regForm);
      const { username, password } = regForm;
      setLoading(true);
      const md5Password = md5(password);
      const data = await regPost({ ...regForm, password: md5Password });
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
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
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
            label="角色"
            name="role"
            rules={[
              {
                required: true,
                message: "请选择角色！",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="normal">普通用户</Radio>
              <Radio value="admin">管理员</Radio>
            </Radio.Group>
          </Form.Item>
          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 4,
            }}
          >
            <Button type="primary" htmlType="submit">
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
