import React from "react";
import { List, Menu } from "antd";
import ProductCard from "./ProductCard";
import { Divider, Space, Tag } from "antd";
import "./index.less";

const data = [
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/CGO/640.jpg",
    title: "广州",
    description: "商品1描述",
    price: "￥100.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/HFE/640.jpg",
    title: "成都",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "杭州",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "北京",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
];
const menuItems = [
  { key: "hotel", label: "酒店" },
  { key: "flight", label: "机票" },
  { key: "ticket", label: "门票" },
];
const ProductList = () => {
  return (
    <div className="product-list">
      <Menu className="menu" mode="horizontal" items={menuItems} />
      <div>
        <Space size={[0, 8]} wrap>
          <Tag className="special-tag" color="purple">
            机票特价
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
