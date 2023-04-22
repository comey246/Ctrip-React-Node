import React, {useEffect, useState,Fragment} from "react";
import produce from "immer";
import {getFlightList} from "@/api/mall.js";
import { connect } from "react-redux";
import {setFlightList,setFlightInfo} from "@/redux/mall/action.js"
import {ProList} from "@ant-design/pro-components";
import {Button, Space, Tag, Row, Col, Select, Input, DatePicker} from "antd";
import request from "umi-request";
import "./index.css";
import {setToken, setUsername} from "@/redux/global/action.js";
import {setMenuList} from "@/redux/menu/action.js";

const {Option} = Select;
const {Search} = Input;


const place = [{label: "北京", value: "BJS"}, {label: "上海", value: "SHA"}, {
    label: "广州",
    value: "CAN"
}, {label: "成都", value: "CTU"}, {label: "杭州", value: "HGH"}]

const Index = (props) => {
    const {setFlightList,setFlightInfo,flightInfo} = props
    const [flight, setFlight] = useState({
        origin: '',
        destination: '',
        date: ''
    });
    const onChange = (change) => {
        return (value) => {
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
        const list = resList.data?.flightList;
        setFlightList(list);
        setFlightInfo(flight);
        console.log(flight)
    }
    return (
        <Fragment>
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
            <Button key="1" type="primary" onClick={getFlight}>
                查询
            </Button>
            </Space>
            <h2>出发地：{flightInfo.origin}目的地：{flightInfo.destination}日期：{flightInfo.date}</h2>
        </Fragment>
    );
}
const mapStateToProps = (state) =>(state.mall)
const mapDispatchToProps = { setFlightList,setFlightInfo};
export default connect(mapStateToProps, mapDispatchToProps)(Index);