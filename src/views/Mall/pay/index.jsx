import React from "react";
import "./index.css";

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

  const maskedIdNumber =
    idNumber.slice(0, -6).replace(/\d/g, "*") + idNumber.slice(-6);

  return (
    <div className="payment-page">
      <h1>支付页面</h1>
      <div className="order-info">
        <h2>订单信息</h2>
        <div className="order-left">
          <p>航班号：{flightInfo.flightNumber}</p>
          <p>起飞时间：{flightInfo.departureTime}</p>
          <p>到达时间：{flightInfo.arrivalTime}</p>
          <p>购买数量：{tickets}</p>
        </div>
        <div className="order-right">
          <p>预定人姓名：{name}</p>
          <p>预定人手机号：{phoneNumber}</p>
          <p>预定人身份证号：{maskedIdNumber}</p>
          <p className="total-price">支付金额：¥{totalPrice}</p>
        </div>
      </div>
      <div className="payment-methods">
        <h2>支付方式</h2>
        <div className="method">
          <label htmlFor="wechat">
            <input type="radio" id="wechat" name="payment" />
            微信支付
          </label>
        </div>
        <div className="method">
          <label htmlFor="alipay">
            <input type="radio" id="alipay" name="payment" />
            支付宝支付
          </label>
        </div>
        <div className="method">
          <label htmlFor="credit-card">
            <input type="radio" id="credit-card" name="payment" />
            信用卡支付
          </label>
        </div>
      </div>
      <div className="payment-actions">
        <button className="payment">取消支付</button>
        <button className="payment">确认支付</button>
      </div>
    </div>
  );
};

export default PaymentPage;
