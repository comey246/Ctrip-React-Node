import React, {useEffect, useState} from "react";
import "./index.less";
import { Descriptions, Col, Row } from "antd";
import {getOrder, payFlight} from "@/api/mall.js";
const PaymentPage = (props) => {
  const{order,payResult,handleCancel}=props
  const [orderInfo,setOrderInfo] = useState({})
  const[flight,setFlight] = useState({})
  const ticketInfo = {
    flightNumber: "CA1234",
    departureTime: "2023-04-22 14:00",
    arrivalTime: "2023-04-22 18:00",
    price: 1800,
  };

  const totalPrice = ticketInfo.price * tickets;
  const phoneNumber = "13800138000";
  const idNumber = "110101199003078888";
  const name = "张三";
  const time = "2023-04-20 14:00";
  const maskedIdNumber =
    idNumber.slice(0, -6).replace(/\d/g, "*") + idNumber.slice(-6);
  const pay = async ()=>{
    const {code,data:{order_id}} = await payFlight({order_id:order})
    if(code===200){
      payResult(3,order_id)
    }else payResult(-1,order_id)
  }
const getOrderInfo = async ()=>{
    const {code,data}= await getOrder({user_id:order});
    if(code===200){
      setOrderInfo(data)
      setFlight(data?.info?.flight)
    }
}
  useEffect(()=>{
    getOrderInfo();
  },[])
  return (
    <div className="payment-page">
      <h1>支付页面</h1>
      <div className="order-info">
        <Descriptions title="订单信息">
          <Descriptions.Item label="航班号">
            {flight?.flight_number}
          </Descriptions.Item>
          <Descriptions.Item label="起飞时间">
            {flight?.arrival_time}
          </Descriptions.Item>
          <Descriptions.Item label="到达时间">
            {flight?.departure_time}
          </Descriptions.Item>
          <Descriptions.Item label="购买数量">{orderInfo?.number}</Descriptions.Item>
          <Descriptions.Item label="预定人姓名">{orderInfo?.user_name}</Descriptions.Item>
          <Descriptions.Item label="预定人手机号">
            {orderInfo?.info.phone}
          </Descriptions.Item>
          <Descriptions.Item label="预定人身份证号">
            {orderInfo?.info.phone}
          </Descriptions.Item>
          <Descriptions.Item label="下单时间">{time}</Descriptions.Item>
          <Descriptions.Item className="total-price" label="支付金额">
            ¥{orderInfo.total}
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
        <button className="cancel-payment" onClick={handleCancel}>取消支付</button>
        <button onClick={pay}>确认支付</button>
      </div>
    </div>
  );
};

export default PaymentPage;
