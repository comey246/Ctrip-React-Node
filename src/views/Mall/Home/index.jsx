import React, { useEffect, useState, Fragment } from "react";
import produce from "immer";
import { getFlightList } from "@/api/mall.js";
import { ProList } from "@ant-design/pro-components";
import { Button, Space, Tag, Row, Col, Select, Input, DatePicker } from "antd";
import request from "umi-request";
import PaymentPage from "@/views/Mall/pay/index.jsx";
import PaymentSuccess from "@/views/Mall/PaymentSuccess/index.jsx";
import PaymentFailure from "@/views/Mall/PaymentFailure/index.jsx";
import "./index.css";

const { Option } = Select;
const { Search } = Input;

// 假设我们有以下类型的数据

const place = [
  { label: "北京", value: "BJS" },
  { label: "上海", value: "SHA" },
  {
    label: "广州",
    value: "CAN",
  },
  { label: "成都", value: "CTU" },
  { label: "杭州", value: "HGH" },
];

const Index = (props) => {
  const [flightsData, setFlightsData] = useState([]);
  const [flight, setFlight] = useState({
    origin: "",
    destination: "",
    date: "",
  });
  useEffect(() => {
    console.log(flight);
  });
  const onChange = (change) => {
    return (value) => {
      console.log(typeof value);
      setFlight(
        produce(flight, (draft) => {
          draft[change] = value;
        })
      );
    };
  };
  const onSelect = (date, value) => {
    setFlight(
      produce(flight, (draft) => {
        draft.date = value;
      })
    );
  };
  const getFlight = async () => {
    const resList = await getFlightList(flight);
    const list = resList.data?.flightList;
    setFlightsData(
      produce(list, (draft) => {
        draft = list;
      })
    );
  };
  return (
    <Fragment>
      <PaymentPage></PaymentPage>
      <PaymentSuccess></PaymentSuccess>
      <PaymentFailure></PaymentFailure>
    </Fragment>
  );
};
export default Index;
