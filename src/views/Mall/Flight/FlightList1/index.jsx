import React, {useEffect, useState,Fragment} from "react";
import produce from "immer";
import {getFlight} from "@/api/mall.js";
import {bookFlight} from "@/api/mall.js";
import {Button, Space, Tag, Row, Col, Select, Input, Modal, Spin, message} from "antd";
import FlightCard from "@/views/Mall/Flight/FlightList/FlightCard/index.jsx";
import Order from "@/views/Mall/Flight/FlightList1/order/index.jsx";
import Pay from "@/views/Mall/Flight/FlightList1/pay/index.jsx";
import PaymentSuccess from "@/views/Mall/PaymentSuccess/index.jsx";
import request from "umi-request";
import "./index.css";
import {setFlightList} from "@/redux/mall/action.js";
import {connect} from "react-redux";
import reduxThunk from "redux-thunk";


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
    const [loading,setLoading] = useState(false)
    const [pay,setPay] = useState(0)
    const [order,setOrder] = useState('')
    const{flightList} = props
    const checkFlight = async (item)=>{
        setLoading(true)
        try {
            setIsModalOpen(true);
            const {data:{flight}} = await getFlight({flightNumber:item.flight_number})
            setTicket(flight)
            setPay(1)
        }finally {
            setLoading(false)
        }
    }
    const handleCancel = () => {
        setPay(0)
        setIsModalOpen(false)
    };
    const handelPay=(order)=>{
        setPay(2)
        setOrder(order)
    }
    const payResult = (isPay,order_id)=>{
        setPay(3)
    }

    if(pay ===0) return(flightList.map((item)=><FlightCard key={item.flight_number} item={item} checkFlight={checkFlight}/>))
    else if(pay===1) return(<Order ticket={ticket} close={handleCancel} ModalOpen={isModalOpen} open={handelPay}></Order>)
        else if(pay===2)return(<Pay order={order} payResult={payResult} ></Pay>)

}
const mapStateToProps = (state) => (state.mall);
export default connect( mapStateToProps)(Index);