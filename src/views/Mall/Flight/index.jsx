import React, {useEffect, useState,Fragment} from "react";
import SearchBar from "@/views/Mall/Flight/SearchBar/index.jsx";
import FlightList from "@/views/Mall/Flight/FlightList/index.jsx";
import produce from "immer";
import {getFlightList} from "@/api/mall.js";
import {ProList} from "@ant-design/pro-components";
import {Button, Space, Tag, Row, Col, Select, Input, DatePicker} from "antd";
import request from "umi-request";
import "./index.css";

const {Option} = Select;
const {Search} = Input;

// 假设我们有以下类型的数据

const Index = (props) => {

    return (
        <Fragment>
            <SearchBar></SearchBar><FlightList></FlightList>
        </Fragment>
    );
}
export default Index;