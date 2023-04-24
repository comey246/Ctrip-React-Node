import React, {useEffect, useState,Fragment} from "react";
import produce from "immer";
import {getFlight} from "@/api/mall.js";
import {bookFlight} from "@/api/mall.js";
import {Button, Space, Tag, Row, Col, Select, Input, Modal,Spin} from "antd";
import Order from "@/views/Mall/Flight/FlightList/Order/index.jsx";
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
    const [selectedFlight,setSelectFlight] = useState(flightTicket)
    const [loading,setLoading] = useState(false)
    const{flightList} = props
    const bookFlight = async (item)=>{
        setLoading(true)
        try {
            setIsModalOpen(true);
            const {data:{flight}} = await getFlight({flightNumber:item.flight_number})
            setSelectFlight(flight)
        }finally {
            setLoading(false)
        }
    }
    const handleClose = () => {
        setIsModalOpen(false);
    };
    return (
        <Fragment>
        {/*<ProList*/}
        {/*    rowKey="id"*/}
        {/*    headerTitle="航班列表"*/}
        {/*    dataSource={flightList}*/}
        {/*    renderItem={(item)=>Card(item)}*/}
        {/*/>*/}
            {flightList.map((item)=><FlightCard key={item.flight_number} item={item} bookFlight={bookFlight}/>)}
                    <Order ticket={selectedFlight} close={handleClose} ModalOpen={isModalOpen}></Order>
        </Fragment>
    );
}
const mapStateToProps = (state) => (state.mall);
export default connect( mapStateToProps)(Index);