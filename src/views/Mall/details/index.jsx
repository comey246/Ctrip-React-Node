import React from "react";
import { ProList } from "@ant-design/pro-components";
import { Button, Space, Tag, Row, Col, Select, Input } from "antd";
import request from "umi-request";
import "./index.css";

const { Option } = Select;
const { Search } = Input;

// 假设我们有以下类型的数据
const flightsData = [
  {
    id: 1,
    destination: "上海",
    date: "2023-04-25",
    planeModel: "波音787",
    departureTime: "08:30",
    duration: "2h 30m",
    price: 1200,
  },
  // 更多航班数据...
];

export default () => (
  <ProList
    rowKey="id"
    headerTitle="航班列表"
    dataSource={flightsData}
    toolBarRender={() => {
      return [
        <Space key="search" className="search-container">
          <Select
            // key="departure"
            showSearch
            style={{ width: "100%" }}
            placeholder="出发地"
            optionFilterProp="children"
          >
            <Option value="beijing">北京</Option>
            <Option value="shanghai">上海</Option>
            <Option value="guangzhou">广州</Option>
            {/* 更多出发地选项 */}
          </Select>

          <Select
            // key="destination"
            showSearch
            style={{ width: "100%" }}
            placeholder="目的地"
            optionFilterProp="children"
          >
            <Option value="beijing">北京</Option>
            <Option value="shanghai">上海</Option>
            <Option value="guangzhou">广州</Option>
            {/* 更多目的地选项 */}
          </Select>
        </Space>,
        <Button key="1" type="primary">
          查询
        </Button>,
      ];
    }}
    renderItem={(item) => {
      return (
        <div className="flight-item">
          <Row>
            <Col xs={24} sm={12} md={5} lg={5} xl={5}>
              <div className="destination">{item.destination}</div>
              <div className="date">{item.date}</div>
            </Col>
            <Col xs={24} sm={12} md={5} lg={5} xl={5}>
              <div className="plane-model">{item.planeModel}</div>
              <div className="departure-time">{item.departureTime}</div>
            </Col>
            <Col xs={24} sm={12} md={5} lg={5} xl={5}>
              <div className="duration">{item.duration}</div>
            </Col>
            <Col xs={24} sm={12} md={5} lg={5} xl={5}>
              <div className="price">¥{item.price}</div>
            </Col>
            <Col xs={24} sm={12} md={4} lg={4} xl={4}>
              <div className="book-button">
                <Button type="primary">订票</Button>
              </div>
            </Col>
          </Row>
        </div>
      );
    }}
  />
);
