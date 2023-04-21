import React from "react";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";

const PaymentFailure = () => {
  return (
    <div className="order-failure">
      <div className="failure-icon">
        {/* <i className="fas fa-times"></i> */}
      </div>
      <h2>提交失败</h2>
      <p>请核对并修改以下信息后，再重新提交</p>
      <div className="failure-button">
        <button className="btn">返回修改</button>
      </div>
      <div className="error-messages">
        <p>您提交的内容有如下错误:</p>
        <p>您的账户已被冻结</p>
        <p>您的账户还不具备申请资格</p>
      </div>
    </div>
  );
};

export default PaymentFailure;
