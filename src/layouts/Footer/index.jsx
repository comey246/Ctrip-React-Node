import React from "react";
import "./index.css";
import { Divider, Space, Typography } from "antd";

const { Text } = Typography;

const Index = () => {
  return (
    <div className="footer">
      <Space>
        <Text className="footer-item">旅游资讯</Text>
        <Divider type="vertical" />
        <Text className="footer-item">加盟合作</Text>
        <Divider type="vertical" />
        <Text className="footer-item">关于携程</Text>
      </Space>
    </div>
  );
};

export default Index;
