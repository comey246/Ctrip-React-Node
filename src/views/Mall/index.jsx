import "./index.css";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Index;
