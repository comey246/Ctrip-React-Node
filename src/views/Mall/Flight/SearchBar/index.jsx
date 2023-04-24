import React, {useEffect, useState, Fragment} from "react";
import produce from "immer";
import {getFlightList} from "@/api/mall.js";
import {connect} from "react-redux";
import {setFlightList, setFlightInfo} from "@/redux/mall/action.js"
import {Button, Space, Tag, Row, Col, Select, Input, DatePicker} from "antd";
import request from "umi-request";
import "./index.less";
import {setToken, setUsername} from "@/redux/global/action.js";
import {setMenuList} from "@/redux/menu/action.js";
import {SwapOutlined} from "@ant-design/icons";

const {Option} = Select;
const {Search} = Input;


const place = [{label: "北京", value: "BJS"}, {label: "上海", value: "SHA"}, {
    label: "广州",
    value: "CAN"
}, {label: "成都", value: "CTU"}, {label: "杭州", value: "HGH"}]

const Index = (props) => {
    const {setFlightList, setFlightInfo, flightInfo} = props
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
    const onSelect = (date, value) => {
        setFlight(
            produce(flight, (draft) => {
                draft.date = value;
            }))
    }
    const swapLocations = () => {
        setFlight(
            produce(flight, (draft) => {
                [draft.origin, draft.destination] = [draft.destination, draft.origin];
            })
        );
    };
    const getFlight = async () => {
        const resList = await getFlightList(flight);
        const list = resList.data?.flightList;
        setFlightList(list);
        setFlightInfo(flight);
        console.log(flight)
    }
    return (
        <Fragment>
            <div className="search-container">
                <Row align="middle" justify="center" gutter={[16, 16]}>
                    <Col xs={10} sm={8} md={4} lg={4} xl={4}>
                        <Select
                            showSearch
                            style={{width: "100%"}}
                            placeholder="出发地"
                            optionFilterProp="children"
                            options={place}
                            onChange={onChange("origin")}
                        />
                    </Col>
                    <Col xs={4} sm={8} md={1} lg={1} xl={1}>
                        <Button
                            className="swap"
                            type="dashed"
                            shape="circle"
                            icon={<SwapOutlined className="swap-arrow"/>}
                            onClick={swapLocations}
                        />
                    </Col>
                    <Col xs={10} sm={8} md={4} lg={4} xl={4}>
                        <Select
                            showSearch
                            style={{width: "100%"}}
                            placeholder="目的地"
                            optionFilterProp="children"
                            options={place}
                            onChange={onChange("destination")}
                        />
                    </Col>
                    <Col xs={24} sm={8} md={4} lg={4} xl={4}>
                        <Space>
                        <DatePicker onChange={onSelect} />
                        </Space>
                    </Col>
                    <Col xs={24} sm={8} md={2} lg={2} xl={2}>
                        <Button
                            className="search"
                            key="1"
                            type="primary"
                            onClick={getFlight}
                            style={{width: "100%"}}
                        >
                            查询
                        </Button>
                    </Col>
                </Row>

            </div>

</Fragment>
    );
}
const mapStateToProps = (state) => (state.mall)
const mapDispatchToProps = {setFlightList, setFlightInfo};
export default connect(mapStateToProps, mapDispatchToProps)(Index);