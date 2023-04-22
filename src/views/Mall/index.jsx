import "./index.css";
import React, { Fragment } from "react";

import { Outlet } from "react-router-dom";
import ProductList from "./shangcheng";
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import TravelPage from "./front";

import TicketBooking from "./order";
import PaymentPage from "./pay";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailure from "./PaymentFailure";

const Index = () => {
  return (
    <Fragment>
      <Outlet></Outlet>
      {/*<TravelPage />*/}
      {/*<ProductList />*/}
      {/*<FlightList />*/}
      {/*<TicketBooking />*/}
      {/*<PaymentPage />*/}
      {/*<PaymentSuccess />*/}
      {/*<PaymentFailure />*/}
    </Fragment>
  );
};

export default Index;
