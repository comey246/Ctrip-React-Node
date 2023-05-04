import React, {useEffect, useState} from "react";
import "./index.less";
import {useNavigate} from "react-router-dom";
import { Descriptions, Col, Row, Progress, Space } from "antd";
import {getOrder} from "@/api/mall.js";
const PaymentSuccess = (props) => {
  const {handleCancel,order} = props;
  const navigate = useNavigate()
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
    getOrderInfo()
  },[])
const toOrder = ()=>{
  navigate('/home/user/order')
  handleCancel()
}

  return (
    <div className="payment-success">
      <div className="success-icon">
        <Space wrap>
          <Progress type="circle" percent={100} size="default" />
        </Space>
        <h2>提交成功</h2>
      </div>

      <div className="success-buttons">
        <button className="btn" onClick={handleCancel}>返回</button>
        <button className="btn" onClick={toOrder}>查看</button>
        <button className="btn">打印</button>
      </div>
      <div className="order-info">
        <Descriptions title="订单信息">
          <Descriptions.Item label="航班号">
            {flight?.flight_number}
          </Descriptions.Item>
          <Descriptions.Item label="起飞时间">
            {flight?.arrival_time}
          </Descriptions.Item>
          <Descriptions.Item label="到达时间">
            {flight?.departure_time}
          </Descriptions.Item>
          <Descriptions.Item label="购买数量">{orderInfo?.number}</Descriptions.Item>
          <Descriptions.Item label="预定人姓名">{orderInfo?.info?.name}</Descriptions.Item>
          <Descriptions.Item label="预定人手机号">
            {orderInfo?.info?.phone}
          </Descriptions.Item>
          <Descriptions.Item label="预定人身份证号">
            {orderInfo?.info?.idNumber}
          </Descriptions.Item>
          <Descriptions.Item className="total-price" label="支付金额">
            ¥{orderInfo?.total}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default PaymentSuccess;
