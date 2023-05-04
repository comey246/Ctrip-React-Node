import React, { useEffect, useState, Fragment } from "react";

import { Button, Space, Tag, Row, Col, Select, Input, Modal, Spin } from "antd";
import "./index.less";
import { connect } from "react-redux";
import { SwapOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Index = (props) => {
  const { item, checkFlight } = props;
  return (
    <div className="flight-item">
      <Row align="middle" justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <div className="plane-model">{item.airline}</div>
          <div className="plane-model"><span style={{color:"red"}}>{item.flight_number}</span> {item.planeModel}</div>
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

        <Col xs={8} sm={4} md={3} lg={3} xl={3}>
          <div className="departure-time">{item.arrival_time}</div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <div className="price">¥{item.price}</div>
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} xl={3}>
          <div className="seat">余票：{item.seats_available}</div>
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} xl={3}>
          <div className="book-button">
            <Button style={{width:"100%"}} type="primary" onClick={() => checkFlight(item)}>
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
