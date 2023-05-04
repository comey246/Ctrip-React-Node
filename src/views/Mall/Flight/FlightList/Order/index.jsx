// TicketBooking.js
import React, {useEffect, useState} from "react";
import {bookFlight} from "@/api/mall.js";
import "./index.less";
import {Modal, Spin, Button, Descriptions,  Input, Form, Row, Col} from "antd";
import {IdcardOutlined,  MobileOutlined, UserOutlined} from "@ant-design/icons";


const TicketBooking = (props) => {
    const {ticket,ModalOpen,close,open} = props
    const [tickets, setTickets] = useState(1);
    const [loading,setLoading] = useState(false)

    const onFinish  = async (Form) => {
        setLoading(true)
        try {
            const {code, data: {order}, message} = await bookFlight({tickets, ...Form, ...ticket})
            if (code === 200) {
                open(order);
            } else {
                message.error(message);
                close();
            }
        }finally {
            setLoading(false)
        }

    };
    const handleCancel = () => {
        close();

    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
            <div className="ticket-booking">
                    <h1>机票预订</h1>
                    <div className="order-info"><Spin spinning={loading} tip="Loading...">
                        <Descriptions title="航班信息">
                            <Descriptions.Item label="航班号">{ticket.flight_number}</Descriptions.Item>
                            <Descriptions.Item label="航空公司">{ticket.airline}</Descriptions.Item>
                            <Descriptions.Item label="飞机型号">{ticket.planeModel}</Descriptions.Item>
                            <Descriptions.Item label="起飞时间">
                                {ticket.departure_time}
                            </Descriptions.Item>
                            <Descriptions.Item label="起飞地点">{ticket.originLabel}</Descriptions.Item>
                            <Descriptions.Item label="到达时间">
                                {ticket.arrival_time}
                            </Descriptions.Item>
                            <Descriptions.Item label="到达地点">{ticket.destinationLabel}</Descriptions.Item>
                            <Descriptions.Item label="余票">{ticket.seats_available}</Descriptions.Item>
                        </Descriptions>          </Spin>
                    </div>
                    <div className="flight-info">
                        <p>价格：{ticket.price}</p>
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
                                disabled={tickets > ticket.seats_available - 1}
                            >
                                +
                            </button>
                        </div>
                    </div>
                <Form
                    name="flight"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                ><Form.Item
                    name="name"
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
                        name="phone"
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
                        name="idNumber"
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
                            <Col span={6} ><span className="totalprice">总价：¥{ticket.price * tickets}</span></Col>
                            <Col span={6} offset={2}><Button  onClick={handleCancel} className="login-form-button">
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
    );
};

export default TicketBooking;
