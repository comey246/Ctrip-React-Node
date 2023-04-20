import "./index.css";
import React, { Fragment } from "react";
import { FloatButton } from "antd";
import { useNavigate } from "react-router-dom";
import ProductList from "./shangcheng";
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import FlightList from "./details";

const Index = () => {
  const navigate = useNavigate();
  const a = () => {
    navigate("/user/order");
  };

  return (
    <Fragment>
      {/* <button onClick={a}>user</button>
            <div style={{border:"1px solid red"}}><h2>这是商城在views/mall</h2></div> */}
      <ProductList />
      <FlightList />
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </Fragment>
  );
};

export default Index;
