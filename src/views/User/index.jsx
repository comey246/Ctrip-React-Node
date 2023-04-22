import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Form, Input, Space, Table, Tag } from "antd";
import LoginForm from "@/views/Login/LoginForm";
import Userorder from "./Order";

export default function Index() {
  return (
    <Fragment>
      <Outlet>
        <Userorder />
      </Outlet>
    </Fragment>
  );
}
