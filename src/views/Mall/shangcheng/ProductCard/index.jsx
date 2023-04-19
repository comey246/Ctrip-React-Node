import React from "react";
import { Card, Image, Tag, Button } from "antd";
import styles from "./index.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0" />;

const ProductCard = ({ imageUrl, title, description, price, stock, sold }) => {
  return (
    <Card
      hoverable
      className={styles.card}
      cover={<img alt={title} src={imageUrl} className={styles.cardImage} />}
    >
      <Card.Meta title={title} />
      <div className={styles.cardInfo}>
        {/* <p className={styles.cardDescription}>{description}</p> */}
        <div className={styles.tagGroup}>
          <Tag color="orange">库存: {stock}</Tag>
          <Tag color="cyan">已售: {sold}</Tag>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <p style={{ fontWeight: "bold" }}>{price}</p>
        <Button type="primary" size="small" className={styles.detailButton}>
          查看详情
        </Button>
      </div>

      {/* <p style={{ marginTop: 16, fontWeight: "bold" }}>{price}</p> */}
    </Card>
  );
};

export default ProductCard;
