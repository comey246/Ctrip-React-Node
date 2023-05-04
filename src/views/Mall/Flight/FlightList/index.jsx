import React, {useEffect, useState,Fragment} from "react";
import {getFlight, getFlightList} from "@/api/mall.js";
import FlightCard from "@/views/Mall/Flight/FlightList/FlightCard/index.jsx";
import Order from "@/views/Mall/Flight/FlightList/order/index.jsx";
import Pay from "@/views/Pay/index.jsx";
import PaymentSuccess from "@/views/Pay/PaymentSuccess/index.jsx";
import "./index.css";
import {connect} from "react-redux";
import PaymentFailure from "@/views/Pay/PaymentFailure/index.jsx";
import {message, Spin} from "antd";
import {setFlightList} from "@/redux/mall/action.js";
import {useNavigate} from "react-router-dom";


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
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ticket,setTicket] = useState(flightTicket)
    const [loading,setLoading] = useState(false)
    const [pay,setPay] = useState(0)
    const [order,setOrder] = useState('')
    const [list,setList] = useState([])
    const{flightInfo,token} = props
    const checkFlight = async (item)=>{
        if(token === '') {
            message.warning('请先登录或注册')
            return navigate('/login')
        }
        setLoading(true)
        try {
            const {data:{flight}} = await getFlight({flightNumber:item.flight_number})
            setTicket(flight)
            setPay(1)
        }finally {
            setLoading(false)
        }
    }

    const handleCancel = () => {
        setPay(0)
    };
    const handelPay=(order)=>{
        setPay(2)
        setOrder(order)
    }
    const payResult = (isPay,order_id)=>{
        setPay(isPay)
        setOrder(order_id)
    }
    const getAirlist = async ()=>{
        const resList = await getFlightList(flightInfo);
        const list = resList.data?.flightList;
        setList(list)
    }
    useEffect(()=>{
        getAirlist()
    },[pay,flightInfo])

    if(pay ===0) return(<Spin spinning={loading}>{list.map((item) =>(<FlightCard key={item.flight_number} item={item} checkFlight={checkFlight}/>))}</Spin>)
    else if(pay===1) return(<Order ticket={ticket} close={handleCancel} ModalOpen={isModalOpen} open={handelPay}></Order>)
        else if(pay===2)return(<Pay order={order} payResult={payResult} handleCancel={handleCancel}></Pay>)
    else if(pay===3)return(<PaymentSuccess order={order} handleCancel={handleCancel}></PaymentSuccess>)
    else if(pay===-1) return(<PaymentFailure handleCancel={handleCancel}></PaymentFailure>)
}
const mapStateToProps = (state) => ({...state.mall, ...state.global});
export default connect( mapStateToProps)(Index);