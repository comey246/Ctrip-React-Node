// TicketBooking.js
import React, { useState } from "react";
import "./index.css";

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
      <div className="flight-info">
        <h2>航班信息</h2>
        <p>航班号：CA1234</p>
        <p>起飞时间：2023-04-22 14:00</p>
        <p>到达时间：2023-04-22 18:00</p>
        <p>价格：¥1800</p>
      </div>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="tickets">购买数量：</label>
        <input
          type="number"
          id="tickets"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          min="1"
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

        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default TicketBooking;
