import React, {useEffect, useState,Fragment} from "react";
import produce from "immer";
import {getFlightList} from "@/api/mall.js";
import {ProList} from "@ant-design/pro-components";
import {Button, Space, Tag, Row, Col, Select, Input, DatePicker} from "antd";
import request from "umi-request";
import "./index.css";

const {Option} = Select;
const {Search} = Input;

// 假设我们有以下类型的数据

const place = [{label: "北京", value: "BJS"}, {label: "上海", value: "SHA"}, {
    label: "广州",
    value: "CAN"
}, {label: "成都", value: "CTU"}, {label: "杭州", value: "HGH"}]

const Index = (props) => {
    const [flightsData,setFlightsData] = useState([])
    const [flight, setFlight] = useState({
        origin: '',
        destination: '',
        date: ''
    });
    useEffect(() => {
        console.log(flight)
    })
    const onChange = (change) => {
        return (value) => {
            console.log(typeof value)
            setFlight(
                produce(flight, (draft) => {
                    draft[change] = value;
                }))
        }
    };
    const onSelect = (date,value) =>{
        setFlight(
            produce(flight, (draft) => {
                draft.date = value;
            }))
    }
    const getFlight = async () => {
        const resList = await getFlightList(flight);
        const list = resList.data?.flightList
        setFlightsData(
            produce(list, (draft) => {
                draft = list;
            }))
    }
    return (
        <Fragment>
        <ProList
            rowKey="id"
            headerTitle="航班列表"
            dataSource={flightsData}
            toolBarRender={() => {
                return [
                    <Space className="search-container">
                        <Select
                            showSearch
                            style={{width: "100%"}}
                            placeholder="出发地"
                            optionFilterProp="children"
                            options={place}
                            onChange={onChange("origin")}
                        />
                        <Select
                            showSearch
                            style={{width: "100%"}}
                            placeholder="目的地"
                            optionFilterProp="children"
                            options={place}
                            onChange={onChange("destination")}
                        >
                        </Select>
                        <DatePicker onChange={onSelect}/>
                    </Space>,
                    <Button key="1" type="primary" onClick={getFlight}>
                        查询
                    </Button>,
                ];
            }}
            renderItem={(item) => {
                return (
                    <div className="flight-item">
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
                                    <Button type="primary">订票</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                );
            }}
        /></Fragment>
    );
}
export default Index;