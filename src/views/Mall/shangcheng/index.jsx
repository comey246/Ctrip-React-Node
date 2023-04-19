import React from "react";
import { List, Menu } from "antd";
import ProductCard from "./ProductCard";
import "./index.css";

const data = [
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/CGO/640.jpg",
    title: "郑州",
    description: "商品1描述",
    price: "￥100.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/HFE/640.jpg",
    title: "合肥",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
  {
    imageUrl: "https://pic.c-ctrip.com/flight/fuzzy/KHN/640.jpg",
    title: "南昌",
    description: "商品2描述",
    price: "￥200.00",
    stock: 10,
    sold: 5,
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <Menu className="menu" mode="horizontal">
        <Menu.Item key="hotel">酒店</Menu.Item>
        <Menu.Item key="flight">机票</Menu.Item>
        <Menu.Item key="ticket">门票</Menu.Item>
      </Menu>
      <List
        grid={{
          gutter: 16,
          column: 6,
          xs: 1, // 在窄屏幕上显示 1 列
          sm: 2, // 在较小屏幕上显示 2 列
          md: 4, // 在中等屏幕上显示 3 列
          lg: 5, // 在较大屏幕上显示 4 列
          xl: 6, // 在宽屏幕上显示 4 列
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
