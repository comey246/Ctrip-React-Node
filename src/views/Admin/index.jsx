import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Adminorder from "./Order";
import Adminuser from "./User";
export default function index() {
  return (
    <Fragment>
      <Outlet>
        <Adminorder />
        <Adminuser />
      </Outlet>
    </Fragment>
  );
}
