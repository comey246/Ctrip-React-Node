// TicketBooking.js
import React, { useState } from "react";
import "./index.less";
import {Descriptions, Col, Row, Form, Input, Button} from "antd";
import {UserOutlined, MobileOutlined, IdcardOutlined} from "@ant-design/icons";




const TicketBooking = () => {
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [tickets, setTickets] = useState(1);


  const onFinish = (event) => {
    // event.preventDefault();
    // 在这里处理表单提交事件，例如将数据发送到服务器
    console.log("提交的信息：", { phone, idNumber, tickets });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="ticket-booking">
      <h1>机票预订</h1>
      <div className="order-info">
        <Descriptions title="航班信息">
          <Descriptions.Item label="航班号">CA1234</Descriptions.Item>
          <Descriptions.Item label="航空公司">中航</Descriptions.Item>
          <Descriptions.Item label="飞机型号">空客A320</Descriptions.Item>
          <Descriptions.Item label="起飞时间">
            2023-04-22 14:00
          </Descriptions.Item>
          <Descriptions.Item label="起飞地点">深圳</Descriptions.Item>
          <Descriptions.Item label="到达时间">
            2023-04-22 14:00
          </Descriptions.Item>
          <Descriptions.Item label="到达地点">北京</Descriptions.Item>
          <Descriptions.Item label="已售">5</Descriptions.Item>
          <Descriptions.Item label="余票">100</Descriptions.Item>
        </Descriptions>
      </div>
      <div className="flight-info">
        <p>价格：¥1800</p>
        <div className="ticket-control">
          <button
            onClick={() => setTickets(tickets - 1)}
            disabled={tickets <= 1}
          >
            -
          </button>
          <input
            type="number"
            id="tickets"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
            min="1"
            max="100"
          />
          <button
            onClick={() => setTickets(tickets + 1)}
            disabled={tickets >= 100}
          >
            +
          </button>
        </div>
      </div>
      <div>
      <Form
          name="reg"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
      ><Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入姓名！",
            },{
              pattern:new RegExp(/^[\u4e00-\u9fa5]{2,}$/),message:'请输入正确的姓名'

            }
          ]}
      >
        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="姓名"/>
      </Form.Item>
        <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入手机号！",
              },
              {
                pattern:new RegExp(/^(13\d|14[5-9]|15[^4\D]|16\d|17[135678]|18\d|19[89])\d{8}$/),message:'请输入合法手机号'
              }
            ]}
        >
          <Input size="large" prefix={<MobileOutlined className="site-form-item-icon" />} placeholder="手机"/>
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入身份证号！",
              },
              {
                pattern:new RegExp(/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/),message:'请输入合法身份证'
              }
            ]}
        >
          <Input size="large" prefix={<IdcardOutlined className="site-form-item-icon" />} placeholder="身份证"/>
        </Form.Item>
        <Form.Item>
            <Row>
                <Col span={6} ><span className="totalprice">总价：¥{tickets * 1800}</span></Col>
            <Col span={6} offset={2}><Button  htmlType="submit" className="login-form-button">
                取消
            </Button></Col>
            <Col span={6} offset={2}>
<Button type="primary" htmlType="submit" className="login-form-button">
                下单
            </Button>
            </Col>
        </Row>


        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default TicketBooking;
