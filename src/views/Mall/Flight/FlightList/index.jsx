import React, {useEffect, useState,Fragment} from "react";
import produce from "immer";
import {getFlight} from "@/api/mall.js";
import {bookFlight} from "@/api/mall.js";
import {Button, Space, Tag, Row, Col, Select, Input, Modal, Spin, message} from "antd";
import FlightCard from "@/views/Mall/Flight/FlightList/FlightCard/index.jsx";
import request from "umi-request";
import "./index.css";
import {setFlightList} from "@/redux/mall/action.js";
import {connect} from "react-redux";


const flightTicket = {
    flight_number: "",
    airline: "",
    planeModel: "",
    origin: "",
    originLabel: "",
    destination: "",
    destinationLabel: "",
    date: "",
    departure_time: "",
    arrival_time: "",
    duration: "",
    price: 0,
    seats_available: 0
}
const Index = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ticket,setTicket] = useState(flightTicket)
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [tickets, setTickets] = useState(1);
    const [loading,setLoading] = useState(false)
    const{flightList} = props
    const checkFlight = async (item)=>{
        setLoading(true)
        try {
            setIsModalOpen(true);
            const {data:{flight}} = await getFlight({flightNumber:item.flight_number})
            setTicket(flight)
        }finally {
            setLoading(false)
        }
    }
    const handleOk = async () => {
        setLoading(true)
        const {code,data:{order}} = await bookFlight({phone, idNumber, tickets,...ticket})
        if(code===200){

        }else{message.error('下单失败')}
        setIsModalOpen(false)
        setLoading(false)
    };
    const handleCancel = () => {
        setIsModalOpen(false)
    };
    return (
        <Fragment>
            {flightList.map((item)=><FlightCard key={item.flight_number} item={item} checkFlight={checkFlight}/>)}
            {/*<Order ticket={selectedFlight} close={handleClose} ModalOpen={isModalOpen}></Order>*/}
            <Modal
                title="预订详情"
                closable={false}
                maskStyle={{background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)"}}
                open={isModalOpen}
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
        </Fragment>
    );
}
const mapStateToProps = (state) => (state.mall);
export default connect( mapStateToProps)(Index);