// TicketBooking.js
import React, {useEffect, useState} from "react";
import {bookFlight} from "@/api/mall.js";
import "./index.less";
import {Modal, Spin, Button, Descriptions, message} from "antd";


const TicketBooking = (props) => {
    const {ticket,ModalOpen,close,handlePay} = props
    const [isModalOpen, setIsModalOpen,] = useState(false);
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [tickets, setTickets] = useState(1);
    const [loading,setLoading] = useState(false)

    const handleOk = async () => {
        setLoading(true)
        const {code,data:{order},message} = await bookFlight({phone, idNumber,name, tickets,...ticket})
        if(code===200){
            handlePay(order);
        } else {
            close();
            message.error(message);
        }
        setIsModalOpen(false)
        setLoading(false)
    };
    const handleCancel = () => {
        setIsModalOpen(false)
        close();
    };
    return (
        <Modal
            width={1000}
            closable={false}
            maskStyle={{background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)"}}
            open={ModalOpen}
            footer={[
                <Button key="back" onClick={handleCancel} style={{width:50}}>
                    取消
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk} >
                    确认下单
                </Button>  ]}

        ><div className="ticket-booking">
                    <h1>机票预订</h1>
                    <div className="order-info"><Spin spinning={loading} tip="Loading...">
                        <Descriptions title="航班信息">
                            <Descriptions.Item label="航班号">{ticket.flight_number}</Descriptions.Item>
                            <Descriptions.Item label="航空公司">{ticket.airline}</Descriptions.Item>
                            <Descriptions.Item label="飞机型号">{ticket.planeModel}</Descriptions.Item>
                            <Descriptions.Item label="起飞时间">
                                {ticket.departure_time}
                            </Descriptions.Item>
                            <Descriptions.Item label="起飞地点">{ticket.originLabel}</Descriptions.Item>
                            <Descriptions.Item label="到达时间">
                                {ticket.arrival_time}
                            </Descriptions.Item>
                            <Descriptions.Item label="到达地点">{ticket.destinationLabel}</Descriptions.Item>
                            <Descriptions.Item label="已售">{Math.floor(Math.random()*10)}</Descriptions.Item>
                            <Descriptions.Item label="余票">{ticket.seats_available}</Descriptions.Item>
                        </Descriptions>          </Spin>
                    </div>
                    <div className="flight-info">
                        <p>价格：{ticket.price}</p>
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

                    <form className="booking-form">
                        <label htmlFor="name">姓名：</label>
                        <input
                            type="text"
                            id="name"
                            value={idNumber}
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
                            <span className="totalprice">总价：¥{tickets * ticket.price}</span>
                        </div>
                    </form>
        </div>
        </Modal>
    );
};

export default TicketBooking;
