import { Carousel } from "antd";
import "./index.less";

const TravelPage = () => (
  <div className="wrapper">
    <Carousel autoplay>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://dimg04.c-ctrip.com/images/0AS4n120009gibprdAE78.png"
        />
      </div>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://dimg04.c-ctrip.com/images/0zg011200084963208EE1.jpg"
        />
      </div>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://ts1.cn.mm.bing.net/th/id/R-C.80d5a189c7c2dbec0d67809619479380?rik=zXtWesuxpMr1kQ&riu=http%3a%2f%2fcdn.cc%2fuploadfiles%2f2020%2f08%2f20200814163451912.jpg&ehk=z8bsrymMvGwDCJA4pvbethv%2fNOun5DEAETaZ2maZxCQ%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </Carousel>
  </div>
);
export default TravelPage;
