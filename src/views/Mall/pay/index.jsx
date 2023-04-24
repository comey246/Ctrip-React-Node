import React from "react";
import "./index.less";
import { Descriptions, Col, Row } from "antd";

const PaymentPage = () => {
  const flightInfo = {
    flightNumber: "CA1234",
    departureTime: "2023-04-22 14:00",
    arrivalTime: "2023-04-22 18:00",
    price: 1800,
  };
  const tickets = 2;
  const totalPrice = flightInfo.price * tickets;
  const phoneNumber = "13800138000";
  const idNumber = "110101199003078888";
  const name = "张三";
  const time = "2023-04-20 14:00";
  const maskedIdNumber =
    idNumber.slice(0, -6).replace(/\d/g, "*") + idNumber.slice(-6);

  return (
    <div className="payment-page">
      <h1>支付页面</h1>
      <div className="order-info">
        <Descriptions title="订单信息">
          <Descriptions.Item label="航班号">
            {flightInfo.flightNumber}
          </Descriptions.Item>
          <Descriptions.Item label="起飞时间">
            {flightInfo.departureTime}
          </Descriptions.Item>
          <Descriptions.Item label="到达时间">
            {flightInfo.arrivalTime}
          </Descriptions.Item>
          <Descriptions.Item label="购买数量">{tickets}</Descriptions.Item>
          <Descriptions.Item label="预定人姓名">{name}</Descriptions.Item>
          <Descriptions.Item label="预定人手机号">
            {phoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="预定人身份证号">
            {maskedIdNumber}
          </Descriptions.Item>
          <Descriptions.Item label="下单时间">{time}</Descriptions.Item>
          <Descriptions.Item className="total-price" label="支付金额">
            ¥{totalPrice}
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="payment-methods">
        <h2>支付方式</h2>
        <Row>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <label htmlFor="wechat">
              <input type="radio" id="wechat" name="payment" />
              微信
            </label>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <label htmlFor="alipay">
              <input type="radio" id="alipay" name="payment" />
              支付宝
            </label>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <label htmlFor="credit-card">
              <input type="radio" id="credit-card" name="payment" />
              信用卡
            </label>
          </Col>
        </Row>
      </div>
      <div className="payment-actions">
        <button className="cancel-payment">取消支付</button>
        <button>确认支付</button>
      </div>
    </div>
  );
};

export default PaymentPage;
