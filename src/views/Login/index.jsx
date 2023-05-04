import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Button, Form, Input, Space, Table, Tag, Row, Col, Switch} from "antd";
import LoginForm from "@/views/Login/LoginForm";
import RegForm from "@/views/Login/regForm/index.jsx";
import "./index.less";
import loginLeft from "./images/welcome.png";
import logo from "./images/logo.png";
import {setTheme} from "@/redux/global/action.js";

function Index(props) {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const {theme, setTheme} = props
  const themeChange = (theme) => {
    setTheme(theme)
  }
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
  };
  return (
      <div className={theme?"login-container dark":"login-container"}>
        <div className={theme?"login-box dark":"login-box"}>
          <div className="login-left">
          <img src={loginLeft} alt="welcome" />
          </div>
          <div className={theme?"login-form dark":"login-form"}>
            <Space size="large">
              <img src={logo} alt="logo" />
            <Switch
                checkedChildren={<span>🌜</span>}
                unCheckedChildren={<span>🌞</span>}
                onChange={themeChange}
                checked={theme}
            />
            </Space>
            <div className="login-logo">
              <span
                className={`tab-text ${theme?'dark-text':''} ${showLoginForm ? "active" : ""}`}
                onClick={handleLoginClick}
              >
                登录
              </span>
              <span
                className={`tab-text ${theme?'dark-text':''} ${showLoginForm ? "" : "active"}`}
                onClick={handleRegisterClick}
              >
                注册
              </span>
            </div>
            <div className="form">
              {showLoginForm ? <LoginForm /> : <RegForm />}
            </div>
          </div>
        </div>
      </div>
  );
}
const mapStateToProps = (state) => (state.global);
const mapDispatchToProps = {setTheme};
export default connect(mapStateToProps,mapDispatchToProps)(Index);
