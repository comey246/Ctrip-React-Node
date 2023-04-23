import { Badge, Descriptions } from "antd";
const Info = () => (
  <Descriptions
    title="用户详情"
    layout="vertical"
    bordered
    style={{ backgroundColor: "transparent" }}
  >
    <Descriptions.Item label="用户名">John Brown</Descriptions.Item>
    <Descriptions.Item label="昵称">海盐荔枝</Descriptions.Item>
    <Descriptions.Item label="手机号">11235430685</Descriptions.Item>
    <Descriptions.Item label="性别">女</Descriptions.Item>
    <Descriptions.Item label="身份证号">3231546512315415315</Descriptions.Item>
    <Descriptions.Item label="收货地址">梅陇路130号</Descriptions.Item>
    <Descriptions.Item label="订单数量">3</Descriptions.Item>
    <Descriptions.Item label="Status" span={2}>
      <Badge status="processing" text="订单进行中" />
    </Descriptions.Item>
    <Descriptions.Item label="注册天数">365</Descriptions.Item>
    <Descriptions.Item label="总消费额">2400</Descriptions.Item>
    <Descriptions.Item label="用户档案">
      用户爱好: 旅行
      <br />
      职业: 学生
      <br />
      常住地: 上海徐汇
      <br />
    </Descriptions.Item>
  </Descriptions>
);
export default Info;
