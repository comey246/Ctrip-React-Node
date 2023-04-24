// TicketBooking.js
import React, { useState } from "react";
import "./index.less";
import { Descriptions, Col, Row } from "antd";

const TicketBooking = () => {
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 在这里处理表单提交事件，例如将数据发送到服务器
    console.log("提交的信息：", { phone, idNumber, tickets });
  };

  return (
    <div className="ticket-booking">
      <h1>机票预订</h1>
      <div className="order-info">
        <Descriptions title="航班信息">
          <Descriptions.Item label="航班号">CA1234</Descriptions.Item>
          <Descriptions.Item label="航空公司">中航</Descriptions.Item>
          <Descriptions.Item label="飞机型号">空客A320</Descriptions.Item>
          <Descriptions.Item label="起飞时间">
            2023-04-22 14:00
          </Descriptions.Item>
          <Descriptions.Item label="起飞地点">深圳</Descriptions.Item>
          <Descriptions.Item label="到达时间">
            2023-04-22 14:00
          </Descriptions.Item>
          <Descriptions.Item label="到达地点">北京</Descriptions.Item>
          <Descriptions.Item label="已售">5</Descriptions.Item>
          <Descriptions.Item label="余票">100</Descriptions.Item>
        </Descriptions>
      </div>
      <div className="flight-info">
        <p>价格：¥1800</p>
        <div className="ticket-control">
          <button
            onClick={() => setTickets(tickets - 1)}
            disabled={tickets <= 1}
          >
            -
          </button>
          <input
            type="number"
            id="tickets"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
            min="1"
            max="100"
          />
          <button
            onClick={() => setTickets(tickets + 1)}
            disabled={tickets >= 100}
          >
            +
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="idNumber">姓名：</label>
        <input
          type="text"
          id="idNumber"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          required
        />
        <label htmlFor="phone">手机号码：</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label htmlFor="idNumber">身份证号：</label>
        <input
          type="text"
          id="idNumber"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          required
        />
        <div className="total-price-and-submit">
          <span className="totalprice">总价：¥{tickets * 1800}</span>
          <button type="submit">确认下单</button>
        </div>
      </form>
    </div>
  );
};

export default TicketBooking;
