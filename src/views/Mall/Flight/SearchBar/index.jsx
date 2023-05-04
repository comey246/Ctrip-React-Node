import React, { useEffect, useState, Fragment } from "react";
import produce from "immer";
import { getFlightList } from "@/api/mall.js";
import { connect } from "react-redux";
import { setFlightList, setFlightInfo } from "@/redux/mall/action.js";
import {Button, Space,  Row, Col, Select, Input, DatePicker, message} from "antd";
import "./index.less";
import { SwapOutlined } from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const place = [
  { label: "北京", value: "BJS" },
  { label: "上海", value: "SHA" },
  {
    label: "广州",
    value: "CAN",
  },
  { label: "成都", value: "CTU" },
  { label: "杭州", value: "HGH" },
];

const Index = (props) => {
  const { setFlightList, setFlightInfo, flightInfo,page } = props;
  const navigate = useNavigate()
  const [flight, setFlight] = useState({
    origin: "",
    destination: "",
    date: "",
  });
  // useEffect(()=>{
  //   if(flight.origin===flight.destination && flight.origin+flight.destination !==''){
  //     message.warning("目的地与出发地相同！")
  //   }
  // },[flight.origin,flight.destination])

  const onChange = (change) => {
    return (value) => {
      setFlight(
        produce(flight, (draft) => {
          draft[change] = value;
        })
      );
    };
  };
  const onSelect = (date, value) => {
    setFlight(
      produce(flight, (draft) => {
        draft.date = value;
      })
    );
  };
  const swapLocations = () => {
    const tem = flight.destination;
    setFlight(
      produce(flight, (draft) => {
        draft.destination = flight.origin;
        draft.origin = tem;
      })
    );
  };
  const getFlight = async () => {
    if(flight.origin === flight.destination || flight.origin==='' || flight.destination ==='' || flight.date ==='')
      return message.warning("请检查检索条件")
    const resList = await getFlightList(flight);
    const list = resList.data?.flightList;
    setFlightInfo(flight);
    if(page){navigate('/home/mall/flight')}
  };
  useEffect(()=>{
    setFlight(flightInfo)
  },[])
  return (
    <Fragment>
      <div className="search-container">
        <Row align="middle" justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={8} md={4} lg={4} xl={4}>
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="出发地"
              optionFilterProp="children"
              options={place}
              onChange={onChange("origin")}
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={4}>
            <div>
            <h3>{flight.date}</h3>
            <h3>
              {flight.origin}
              <Button
                className="swap"
                type="dashed"
                shape="circle"
                icon={<SwapOutlined className="swap-arrow" />}
                onClick={swapLocations}
              />
              {flight.destination}
            </h3></div>
          </Col>
          <Col xs={24} sm={8} md={4} lg={4} xl={4}>
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="目的地"
              optionFilterProp="children"
              options={place}
              onChange={onChange("destination")}
            />
          </Col>
          <Col xs={24} sm={8} md={4} lg={4} xl={4}>
            <Space>
              <DatePicker placeholder="选择日期" onChange={onSelect} />
            </Space>
          </Col>
          <Col xs={24} sm={8} md={4} lg={3} xl={3}>
            <Button
              className="search"
              key="1"
              type="primary"
              onClick={getFlight}
              style={{ width: "100%" }}
            >
              查询
            </Button>
          </Col>
        </Row>
      </div>
      {page?"":(<div style={{paddingBottom:"10px"}}><span style={{fontSize:"20px"}}>{flight.origin}-{flight.destination}</span> {flight.date} 搜索结果：</div>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => state.mall;
const mapDispatchToProps = { setFlightList, setFlightInfo };
export default connect(mapStateToProps, mapDispatchToProps)(Index);
