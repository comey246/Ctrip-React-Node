import React, {Fragment, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.less";
import {Avatar, Badge, Button, Checkbox, Descriptions, Form, Input, List, message, Modal, Skeleton, Table} from "antd";
import Info from "@/views/Admin/Order/Info";
import {deletOrder, getMapOrders} from "@/api/mall.js";

const columns = [
  {
    title: "商品名称",
    dataIndex: "name",
    key: "商品名称",
  },
  {
    title: "订单编号",
    dataIndex: "number",
    key: "订单编号",
  },
  {
    title: "删除订单",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "机票",
    number: "f2356415",
    description: <Info />,
  },
  {
    key: 2,
    name: "机票",
    number: "f15634865123",
    description: <Info />,
  },
  {
    key: 3,
    name: "机票",
    number: "s853153153",
    description: <Info />,
  },
];

const Adminorder = (props) => {
  const [count,setCount] = useState(5)
  const [total,setTotal] = useState(0)
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [loading,setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal,setModal] =useState({})
  const getlist = async ()=>{
    const res = await getMapOrders({count,total})
    setTotal(total + count);
    console.log(res)
      let newArr = []
      res.data.forEach(e=>{
          newArr.push(e)
      })
    return newArr
  }
  const initList = async ()=>{
      const res = await getlist()
      setData(res);
      setList(res);
  }
  useEffect(()=>{
      setLoading(true)
      initList()
      setLoading(false)
  },[])
    const deleteOrder = async (id) => {
        setLoading(true)
        const delMap = await deletOrder({ order_id:id });
        if (delMap.code === 200) {
            message.success("删除成功");
            data.forEach((e,i)=>{
                if(e.id === id){
                   let arr =  data
                    arr.splice(i,1)
                       setData(arr)
                        setList(arr)
                }
            })
        }
        setLoading(false)
    };
    useEffect(()=>{
        setLoading(true)

        setLoading(false)
    },[])
  const onLoadMore = async () => {
    setLoading(true);
    setList(
        data.concat(
            [...new Array(count)].map(() => ({
              loading: true,
            })),
        ),
    );
    const res = await getlist();
    const newData = data.concat(res);
    setData(newData);
    setList(newData);
    console.log(newData)
    setLoading(false);
  }
  const loadMore =
       !loading ? (
          <div
              style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
              }}
          >
            <Button onClick={onLoadMore}>loading more</Button>
          </div>
      ) : null;
    const showModal = (item) => {
        setModal(item)
        console.log(item)
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  return (
    <Fragment>
      <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
              <List.Item
                  actions={[ <a onClick={()=>showModal(item)}>详情</a>,<a onClick={()=>deleteOrder(item.id)}>删除</a>]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                      avatar={<Avatar />}
                      title="机票"
                      description={`${item?.id} ${item?.user_name} ${item?.type}`}
                  >
                  </List.Item.Meta>
                </Skeleton>
              </List.Item>
          )}
      />
        <Modal title="用户订单" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800}>
            <Descriptions title="详情" layout="vertical" bordered>
                <Descriptions.Item label="商品名称">{modal.type}{modal.info?.flight.flight_number}</Descriptions.Item>
                <Descriptions.Item label="订单编号">{modal.id}</Descriptions.Item>
                <Descriptions.Item label="出发日期">{modal.info?.flight.date}</Descriptions.Item>
                <Descriptions.Item label="下单时间">{modal.order_time}</Descriptions.Item>
                <Descriptions.Item label="出发时间/地点">{modal.info?.flight.arrival_time}</Descriptions.Item>
                <Descriptions.Item label="到达时间/地点">{modal.info?.flight.departure_time}</Descriptions.Item>
                <Descriptions.Item label="用户名称">
                    {modal.user_name}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                    <Badge status={modal?.status===200?"success":"processing"} text={modal?.status===200?"已支付":"未支付"}/>
                </Descriptions.Item>
                <Descriptions.Item label="付款时间">
                    {modal?.status===200?modal?.pay_time:"暂无"}
                </Descriptions.Item>
                <Descriptions.Item label="单价">{modal.info?.flight.price}</Descriptions.Item>
                <Descriptions.Item label="数量">{modal?.number}</Descriptions.Item>
                <Descriptions.Item label="总价">{modal?.total}</Descriptions.Item>
                <Descriptions.Item label="更多信息">
                    姓名:{modal?.info?.name} 用户id:{modal?.user_id}
                    <br/>
                    手机号:{modal?.info?.phone} 身份证:{modal?.info?.idNumber}
                    <br/>
                    航班号: {modal.info?.flight.flight_number} 航空公司: {modal.info?.flight.airline} 飞机型号: {modal.info?.flight.planeModel}
                    <br/>
                    起飞地: {modal.info?.flight.originLabel} 最终到达: {modal.info?.flight.destinationLabel}
                    <br/>
                </Descriptions.Item>
            </Descriptions>
        </Modal>


    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminorder);
