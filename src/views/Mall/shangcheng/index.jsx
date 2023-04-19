import React from "react";
import { List } from "antd";
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
];

const ProductList = () => {
  return (
    <div className="product-list">
      <List
        grid={{
          gutter: 16,
          column: 6,
          xs: 2, // 在窄屏幕上显示 1 列
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
