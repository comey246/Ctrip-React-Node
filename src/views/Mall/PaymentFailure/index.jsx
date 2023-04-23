import React from "react";
import "./index.less";
import { Descriptions, Progress, Space } from "antd";
const PaymentFailure = () => {
  return (
    <div className="payment-failure">
      <div className="failure-icon">
        <Space wrap>
          <Progress
            type="circle"
            percent={70}
            status="exception"
            size="default"
          />
        </Space>
        <h2>提交失败</h2>
      </div>

      <div className="failure-button">
        <button className="btn">返回修改</button>
      </div>

      <div className="order-info">
        <Descriptions title="您提交的内容有如下错误:">
          <Descriptions.Item label="1">您的账户已被冻结</Descriptions.Item>
          <Descriptions.Item label="2">
            您的账户还不具备申请资格
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default PaymentFailure;
