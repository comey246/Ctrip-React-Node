import { Badge, Descriptions } from "antd";
import {getOrder} from "@/api/mall.js";
import {useEffect, useState} from "react";
const Info = (props) => {
    const {order} = props
    const [orderInfo,setOrderInfo] = useState({})
    const[flight,setFlight] = useState({})
    const getOrderInfo = async ()=>{
        const {code,data}= await getOrder({user_id:order});
        if(code===200){
            console.log(data)
            setOrderInfo(data)
            setFlight(data?.info?.flight)
        }
    }
    useEffect(()=>{
        getOrderInfo();
        console.log(flight,orderInfo)
    },[])
    return (
        <Descriptions title="订单详情" layout="vertical" bordered>
            <Descriptions.Item label="商品名称">{orderInfo?.type}</Descriptions.Item>
            <Descriptions.Item label="订单编号">{order}</Descriptions.Item>
            <Descriptions.Item label="出发日期">{flight?.date}</Descriptions.Item>
            <Descriptions.Item label="下单时间">{orderInfo?.order_time}</Descriptions.Item>
            <Descriptions.Item label="出发时间/地点">{flight?.arrival_time}</Descriptions.Item>
            <Descriptions.Item label="到达时间/地点">{flight?.departure_time}</Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
                <Badge status="processing" text={orderInfo?"已支付":"未支付"}/>
            </Descriptions.Item>
            <Descriptions.Item label="单价">{flight?.price}</Descriptions.Item>
            <Descriptions.Item label="数量">{orderInfo?.number}</Descriptions.Item>
            <Descriptions.Item label="总价">{orderInfo?.total}</Descriptions.Item>
            <Descriptions.Item label="更多信息">
                收货地址: 无
                <br/>
                航班号: {flight?.flight_number}
                <br/>
                航空公司: {flight?.airline}
                <br/>
                飞机型号: {flight?.planeModel}
                <br/>
                起飞地: {flight?.originLabel}
                <br/>
                最终到达: {flight?.destinationLabel}
                <br/>
            </Descriptions.Item>
        </Descriptions>
    );
}
export default Info;
