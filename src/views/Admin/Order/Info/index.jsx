import { Badge, Descriptions } from "antd";
const Info = () => (
  <Descriptions title="订单详情" layout="vertical" bordered>
    <Descriptions.Item label="用户名">John Brown</Descriptions.Item>
    <Descriptions.Item label="商品名称">机票</Descriptions.Item>
    <Descriptions.Item label="订单编号">s1234565789</Descriptions.Item>
    <Descriptions.Item label="出发日期">2023-05-04</Descriptions.Item>

    <Descriptions.Item label="出发时间/地点">08:00/深圳</Descriptions.Item>
    <Descriptions.Item label="到达时间/地点">14:30/北京</Descriptions.Item>
    <Descriptions.Item label="下单时间">2023-05-01 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Status" span={2}>
      <Badge status="processing" text="订单进行中" />
    </Descriptions.Item>
    <Descriptions.Item label="单价">1200</Descriptions.Item>
    <Descriptions.Item label="数量">2</Descriptions.Item>
    <Descriptions.Item label="总价">2400</Descriptions.Item>
    <Descriptions.Item label="更多信息">
      收获地址: 梅陇路130号
      <br />
      航班号: SH0481
      <br />
      航空公司: 中航
      <br />
      飞机型号: 空客A320
      <br />
      起飞地: 深圳
      <br />
      最终到达: 北京
      <br />
    </Descriptions.Item>
  </Descriptions>
);
export default Info;
