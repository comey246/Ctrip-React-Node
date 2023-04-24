import React, { useEffect, useState, Fragment } from "react";
import produce from "immer";
import { getFlight } from "@/api/mall.js";
import { bookFlight } from "@/api/mall.js";
import { Button, Space, Tag, Row, Col, Select, Input, Modal, Spin } from "antd";
import Order from "@/views/Mall/Flight/FlightList/Order/index.jsx";
import request from "umi-request";
import "./index.less";
import { setFlightList } from "@/redux/mall/action.js";
import { connect } from "react-redux";
import { SwapOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Index = (props) => {
  const { item, checkFlight } = props;
  return (
    <div className="flight-item">
      <Row align="middle" justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={5} lg={5} xl={5}>
          <div className="plane-model">航空公司：中行</div>
          <div className="plane-model">航班：{item.planeModel}</div>
        </Col>
        <Col xs={8} sm={4} md={2} lg={2} xl={2}>
          <div className="departure-time">{item.departure_time}</div>
        </Col>
        <Col xs={8} sm={4} md={3} lg={3} xl={3}>
          <h3>
            <ArrowRightOutlined className="arrow-icon" style={{ width: 60 }} />
          </h3>
          <div className="duration">{item.duration}</div>
        </Col>

        <Col xs={8} sm={4} md={2} lg={2} xl={2}>
          <div className="departure-time">{item.arrival_time}</div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <div className="price">¥{item.price}</div>
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} xl={3}>
          <div className="departure-time">余票：{item.seats_available}</div>
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} xl={3}>
          <div className="book-button">
            <Button type="primary" onClick={() => checkFlight(item)}>
              订票
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const mapStateToProps = (state) => state.mall;
export default connect(mapStateToProps)(Index);
