import React from "react";
import { Card, Image, Tag, Button } from "antd";
import styles from "./index.css";
import {useNavigate} from "react-router-dom";
import {setFlightInfo, setFlightList} from "@/redux/mall/action.js";
import {connect} from "react-redux";

const ProductCard = (props) => {
  const navigate = useNavigate()
  const {imageUrl, title, description, price, stock, sold ,setFlightInfo} = props
  const toPage =(destination)=>{
    setFlightInfo({
      origin: "SHA",
      destination: destination,
      date: "2023-05-01",
    })
    navigate('/home/mall/flight')
  }
  return (
    <Card
      hoverable
      className={styles.card}
      cover={<img alt={title} src={imageUrl} className={styles.cardImage} />}
      onClick={() => toPage(description)}
    >
      <Card.Meta title={title} />
      <div className={styles.cardInfo}>
        <div style={{padding:"10px 0"}}>
          {/*<Tag color="orange">库存: {stock}</Tag>*/}
          <Tag color="cyan">剩余机票: {sold}</Tag>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <p style={{ fontWeight: "bold",fontSize:"18px" ,paddingBottom:"10px 0"}}>{price}</p>
        <Button type="primary" size="small" className={styles.detailButton}>
          查看详情
        </Button>
      </div>
    </Card>
  );
};

const mapDispatchToProps = {setFlightInfo };
export default connect(null, mapDispatchToProps)(ProductCard);
