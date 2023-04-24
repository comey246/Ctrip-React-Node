import React from "react";
import "./index.less";
import {useNavigate} from "react-router-dom";
import { Descriptions, Col, Row, Progress, Space } from "antd";
const PaymentSuccess = (props) => {
  const {handleCancel} = props;
  const navigate = useNavigate()
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

  const maskedIdNumber =
    idNumber.slice(0, -6).replace(/\d/g, "*") + idNumber.slice(-6);
const toOrder = ()=>{
  navigate('/home/user/order')
}

  return (
    <div className="payment-success">
      <div className="success-icon">
        <Space wrap>
          <Progress type="circle" percent={100} size="default" />
        </Space>
        <h2>提交成功</h2>
      </div>

      <div className="success-buttons">
        <button className="btn" onClick={handleCancel}>返回</button>
        <button className="btn" onClick={toOrder}>查看</button>
        <button className="btn">打印</button>
      </div>
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
          <Descriptions.Item className="total-price" label="支付金额">
            ¥{totalPrice}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default PaymentSuccess;
