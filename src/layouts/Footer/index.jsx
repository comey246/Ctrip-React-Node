import React from "react";
import "./index.css";
import { Divider, Space, Typography } from "antd";

const { Text } = Typography;

const Index = () => {
  return (
    <div className="footer">
      <Space>
        <Text className="footer-item"><a href="https://www.ctrip.com/"  target="_blank">旅游资讯</a></Text>
        <Divider type="vertical" />
        <Text className="footer-item"><a href="https://www.ctrip.com/"  target="_blank">加盟合作</a></Text>
        <Divider type="vertical" />
        <Text className="footer-item"><a href="https://www.ctrip.com/"  target="_blank">关于携程</a></Text>
      </Space>
    </div>
  );
};

export default Index;
