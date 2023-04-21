import React from "react";
import "./index.css";
// import "font-awesome/css/font-awesome.min.css";
const PaymentSuccess = () => {
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

  return (
    <div className="payment-success">
      <div className="success-icon">
        {/* <i className="fas fa-check"></i> */}
      </div>
      <h2>提交成功</h2>
      <div className="success-buttons">
        <button className="btn">返回</button>
        <button className="btn">查看</button>
        <button className="btn">打印</button>
      </div>
      <div className="order-details">
        <p className="orderdetail">订单详情</p>
        <div className="order-info">
          <div className="left">
            <p>航班号：{flightInfo.flightNumber}</p>
            <p>起飞时间：{flightInfo.departureTime}</p>
            <p>到达时间：{flightInfo.arrivalTime}</p>
            <p>购买数量：{tickets}</p>
          </div>
          <div className="right">
            <p>预定人姓名：{name}</p>
            <p>手机号：{phoneNumber}</p>
            <p>身份证号：{maskedIdNumber}</p>
            <p className="total-price">支付金额：¥{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
