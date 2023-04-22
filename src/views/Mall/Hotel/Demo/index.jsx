import React, { useEffect, useState, Fragment } from "react";
import produce from "immer";
import { getFlightList } from "@/api/mall.js";

import { Button, Space, Tag, Row, Col, Select, Input, DatePicker } from "antd";
import { SwapOutlined, RightOutlined } from "@ant-design/icons";
import request from "umi-request";
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
  const swapLocations = () => {
    setFlight(
      produce(flight, (draft) => {
        [draft.origin, draft.destination] = [draft.destination, draft.origin];
      })
    );
  };
  return (
    <Fragment>
      <div>
        <div className="search-container">
          <Row align="middle" justify="center" gutter={[16, 16]}>
            <Col xs={24} sm={8} md={4} lg={4} xl={4}>
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="出发地"
                optionFilterProp="children"
                options={place}
                onChange={onChange("origin")}
              />
            </Col>
            <Col xs={24} sm={8} md={1} lg={1} xl={1}>
              <Button
                type="dashed"
                shape="circle"
                icon={<SwapOutlined className="swap-arrow" />}
                onClick={swapLocations}
              />
            </Col>
            <Col xs={24} sm={8} md={4} lg={4} xl={4}>
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="目的地"
                optionFilterProp="children"
                options={place}
                onChange={onChange("destination")}
              />
            </Col>
            <Col xs={24} sm={8} md={4} lg={4} xl={4}>
              <DatePicker style={{ width: "100%" }} onChange={onSelect} />
            </Col>
            <Col xs={24} sm={8} md={2} lg={2} xl={2}>
              <Button
                key="1"
                type="primary"
                onClick={getFlight}
                style={{ width: "100%" }}
              >
                查询
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="flight-item">
        {flightsData.map((item) => (
          <div className="flight-item" key={item.id}>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div className="info-box">
                  <div className="destination">
                    出发：{item.originLabel + "(" + item.origin + ")"}
                  </div>
                  <div className="destination">
                    到达：{item.destinationLabel + "(" + item.destination + ")"}
                  </div>
                  <div className="date">{item.date}</div>
                  <div className="plane-model">航班：{item.planeModel}</div>
                  <div className="seats-available">
                    座位数：{item.seats_available}
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div className="departure-time">{item.departure_time}</div>
                <div className="arrow">
                  <RightOutlined className="arrow-icon" />
                </div>
                <div className="arrival-time">{item.arrival_time}</div>
              </Col>
              <Col xs={24} sm={12} md={3} lg={3} xl={3}>
                <div className="duration">用时：{item.duration}</div>
              </Col>
              <Col xs={24} sm={12} md={3} lg={3} xl={3}>
                <div className="price">¥{item.price}</div>
              </Col>
              <Col xs={24} sm={12} md={3} lg={3} xl={3}>
                <div className="book-button">
                  <Button type="primary">订票</Button>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Index;
