import React from "react";
import { List, Menu } from "antd";
import ProductCard from "./ProductCard/index.jsx";
import { Divider, Space, Tag } from "antd";
import "./index.less";
import {useNavigate} from "react-router-dom";

const data = [
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/CGO/640.jpg",
    title: "广州",
    description: "CAN",
    price: "￥500.00",
    stock: 10,
    sold: 6,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/HFE/640.jpg",
    title: "成都",
    description: "CTU",
    price: "￥500.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "杭州",
    description: "HGH",
    price: "￥650.00",
    stock: 10,
    sold: 10,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "北京",
    description: "BJS",
    price: "￥500.00",
    stock: 10,
    sold: 7,
  },
];
const menuItems = [
  { key: "hotel", label: "酒店" },
  { key: "flight", label: "机票" },
  { key: "ticket", label: "门票" },
];

const ProductList = () => {
    const navigate = useNavigate()
    const selectMenu = (menu)=>{
        navigate('/home/mall/'+menu.key)
    }
  return (
    <div className="product-list">
      <Menu className="menu" mode="horizontal" items={menuItems} onClick={selectMenu}/>
      <div style={{marginBottom:10}}>
        <Space size={[0, 8]} wrap>
          <Tag className="special-tag" color="purple">
            五一机票特价
          </Tag>
        </Space>
      </div>
      <List
        grid={{
          gutter: 16,
          column: 4,
          xs: 1, // 在窄屏幕上显示 1 列
          sm: 2, // 在较小屏幕上显示 2 列
          md: 3, // 在中等屏幕上显示 3 列
          lg: 4, // 在较大屏幕上显示 4 列
          xl: 4, // 在宽屏幕上显示 4 列
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <ProductCard {...item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductList;
