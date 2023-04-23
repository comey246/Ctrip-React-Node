import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Space, Table, Tag ,Row,Col} from "antd";
import LoginForm from "@/views/Login/LoginForm";
import RegForm from "@/views/Login/regForm/index.jsx";
import "./index.less";
import loginLeft from "./images/welcome.png";
import logo from "./images/logo.png";

export default function index() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
  };
  return (
    <Fragment>
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
          <img src={loginLeft} alt="welcome" />
          </div>
          <div className="login-form">
              <img src={logo} alt="logo" />
            <div>
            <div className="login-logo">
              <span
                className={`tab-text ${showLoginForm ? "active" : ""}`}
                onClick={handleLoginClick}
              >
                登录
              </span>
              <span
                className={`tab-text ${showLoginForm ? "" : "active"}`}
                onClick={handleRegisterClick}
              >
                注册
              </span>
            </div>
            {showLoginForm ? <LoginForm /> : <RegForm />}
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
