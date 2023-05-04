import {Badge, Button, Col, Descriptions, Row, Space} from "antd";
import {getOrder} from "@/api/mall.js";
import React, {useEffect, useState} from "react";
import Pay from "@/views/Pay/index.jsx";
import PaymentSuccess from "@/views/Pay/PaymentSuccess/index.jsx";
import PaymentFailure from "@/views/Pay/PaymentFailure/index.jsx";
const Info = (props) => {
    const {order} = props
    const [pay,setPay] = useState(0)
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
    const payResult = (isPay,order_id)=>{
        setPay(isPay)
    }
    const handleCancel = () => {
        setPay(0)
    };
    useEffect(()=>{
        getOrderInfo();
    },[pay])
    if(pay === 0 ) return (
        <Descriptions title="订单详情" layout="vertical" bordered>
            <Descriptions.Item label="商品名称">{orderInfo?.type}{flight?.flight_number}</Descriptions.Item>
            <Descriptions.Item label="订单编号">{order}</Descriptions.Item>
            <Descriptions.Item label="出发日期">{flight?.date}</Descriptions.Item>
            <Descriptions.Item label="下单时间">{orderInfo?.order_time}</Descriptions.Item>
            <Descriptions.Item label="出发时间/地点">{flight?.arrival_time}</Descriptions.Item>
            <Descriptions.Item label="到达时间/地点">{flight?.departure_time}</Descriptions.Item>
            <Descriptions.Item label="Status">
                <Badge status={orderInfo?.status===200?"success":"processing"} text={orderInfo?.status===200?"已支付":"未支付"}/>
            </Descriptions.Item>
            <Descriptions.Item label="付款时间">
                {orderInfo?.status===200?orderInfo?.pay_time:"暂无"}
            </Descriptions.Item>
            <Descriptions.Item label="确认支付">
                {orderInfo?.status===200?(<Button disabled>已支付</Button>):(<Button type="primary" onClick={()=>{setPay(2)}}>支付</Button>)}
            </Descriptions.Item>
            <Descriptions.Item label="单价">{flight?.price}</Descriptions.Item>
            <Descriptions.Item label="数量">{orderInfo?.number}</Descriptions.Item>
            <Descriptions.Item label="总价">{orderInfo?.total}</Descriptions.Item>
            <Descriptions.Item label="更多信息">
                姓名:{orderInfo?.info?.name}   手机号:{orderInfo?.info?.phone}
                <br/>
                身份证:{orderInfo?.info?.idNumber}
                <br/>
                航班号: {flight?.flight_number} 航空公司: {flight?.airline} 飞机型号: {flight?.planeModel}
                <br/>
                起飞地: {flight?.originLabel} 最终到达: {flight?.destinationLabel}
                <br/>
            </Descriptions.Item>
        </Descriptions>
    );
    else if (pay === 2)return (<Pay order={order} payResult={payResult} handleCancel={handleCancel}></Pay>)
    else if (pay === 3)return (<PaymentSuccess order={order} handleCancel={handleCancel}></PaymentSuccess>)
    else if (pay === -1)return (<PaymentFailure  handleCancel={handleCancel}></PaymentFailure>)

}
export default Info;
