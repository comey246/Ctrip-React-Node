import React from "react";
import { Card, Image, Tag, Button } from "antd";
import styles from "./index.css";
import {useNavigate} from "react-router-dom";

const ProductCard = ({ imageUrl, title, description, price, stock, sold }) => {
  const navigate = useNavigate()
  const toPage =()=>{
    navigate('/home/mall/flight')
  }
  return (
    <Card
      hoverable
      className={styles.card}
      cover={<img alt={title} src={imageUrl} className={styles.cardImage} />}
    >
      <Card.Meta title={title} />
      <div className={styles.cardInfo}>
        <div className={styles.tagGroup}>
          <Tag color="orange">库存: {stock}</Tag>
          <Tag color="cyan">已售: {sold}</Tag>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <p style={{ fontWeight: "bold" }}>{price}</p>
        <Button type="primary" size="small" className={styles.detailButton} onClick={toPage}>
          查看详情
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
