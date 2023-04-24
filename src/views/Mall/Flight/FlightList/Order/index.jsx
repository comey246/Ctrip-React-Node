// TicketBooking.js
import React, {useEffect, useState} from "react";
import {bookFlight} from "@/api/mall.js";
import "./index.css";
import {Modal, Spin,Button} from "antd";


const TicketBooking = (props) => {
    const {ticket,ModalOpen,close} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [tickets, setTickets] = useState(1);
    const [loading,setLoading] = useState(false)

    const handleOk = async () => {
        setLoading(true)
        const data = await bookFlight({phone, idNumber, tickets,...ticket})
        console.log(data)
        close();
        setIsModalOpen(false)
        setLoading(false)
    };
    const handleCancel = () => {
        setIsModalOpen(false)
        close();
    };
    return (
        <Modal
            title="预订详情"
            maskStyle={{background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)"}}
            open={ModalOpen}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    取消
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    下单
                </Button>,
            ]}
        >
            <Spin spinning={loading} tip="Loading...">
                <div className="ticket-booking">
                    <h1>机票预订</h1>
                    <div className="flight-info">
                        <h2>航班信息</h2>
                        <div className="left-info">
                            <p>航班号：{ticket.flight_number}</p>
                            <p>起飞时间：{ticket.departure_time}</p>
                            <p>到达时间：{ticket.arrival_time}</p>
                        </div>
                        <div className="right-info">
                            <p>价格：{ticket.price}</p>
                            <label htmlFor="tickets">购买数量：</label>
                            <input
                                type="number"
                                id="tickets"
                                value={tickets}
                                onChange={(e) => setTickets(e.target.value)}
                                min="1"
                            />
                        </div>
                    </div>
                    <form className="booking-form">
                        <label htmlFor="name">姓名：</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        </div>
                    </form>
                </div>
            </Spin>
        </Modal>
    );
};

export default TicketBooking;
