import React, {useEffect, useState,Fragment} from "react";
import produce from "immer";
import {getFlight} from "@/api/mall.js";
import {bookFlight} from "@/api/mall.js";
import {Button, Space, Tag, Row, Col, Select, Input, Modal,Spin} from "antd";
import Order from "@/views/Mall/Flight/FlightList/Order/index.jsx";
import request from "umi-request";
import "./index.css";
import {setFlightList} from "@/redux/mall/action.js";
import {connect} from "react-redux";



const Index = (props) => {
    const{item,checkFlight} = props
        return(<div className="flight-item">
            <Row>
                <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                    <div className="destination">出发：{item.originLabel+'('+item.origin+')'}</div>
                    <div className="date">{item.date}</div>
                </Col>
                <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                    <div className="destination">到达：{item.destinationLabel+'('+item.destination+')'}</div>
                </Col>
                <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                    <div className="plane-model">航班：{item.planeModel}</div>
                    <div className="departure-time">起飞时间：{item.departure_time}</div>
                    <div className="departure-time">座位数：{item.seats_available}</div>
                </Col>
                <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                    <div className="departure-time">到达时间：{item.arrival_time}</div>
                    <div className="duration">用时：{item.duration}</div>
                </Col>
                <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                    <div className="price">¥{item.price}</div>
                </Col>
                <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                    <div className="book-button">
                        <Button type="primary" onClick={()=>checkFlight(item)}>订票</Button>
                    </div>
                </Col>
            </Row>
        </div>)
}
const mapStateToProps = (state) => (state.mall);
export default connect( mapStateToProps)(Index);