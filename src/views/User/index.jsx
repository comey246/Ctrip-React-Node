import React, { Fragment } from "react";
import { Outlet, } from "react-router-dom";

export default function Index() {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  );
}
