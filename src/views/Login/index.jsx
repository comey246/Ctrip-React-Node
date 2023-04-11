import React, { Fragment } from "react";
// import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Space, Table, Tag } from "antd";
import LoginForm from "@/views/Login/LoginForm";
import RegForm from "@/views/Login/regForm/index.jsx";
import "./index.less";
import loginLeft from "./images/login_left.png";
import logo from "./images/logo.png";

export default function index() {
  return (
      <Fragment>
        <div className="login-container">
          <div className="login-box">
            <div className="login-left">
              < img src={loginLeft} alt="login" />
            </div>
            <div className="login-form">
              <div className="login-logo">
                < img className="login-icon" src={logo} alt="logo" />
                <span className="logo-text">登陆页面</span>
              </div>
              <LoginForm />
              {/* <RegForm /> */}
            </div>
          </div>
        </div>
      </Fragment>
  );
}
