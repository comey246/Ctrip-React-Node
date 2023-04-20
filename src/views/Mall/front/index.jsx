import { Carousel } from "antd";
import "./index.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#364d79",
};

const TravelPage = () => (
  <div className="wrapper">
    <Carousel autoplay>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://pic.c-ctrip.com/flight/fuzzy/HET/640.jpg"
          alt="酒店"
        />
        <h3
          style={{
            ...contentStyle,
            bottom: "5%",
            fontFamily: "'Microsoft YaHei', sans-serif",
          }}
        >
          酒店
        </h3>
      </div>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://pic.c-ctrip.com/flight/fuzzy/DLC/640.jpg"
          alt="机票"
        />
        <h3
          style={{
            ...contentStyle,
            bottom: "5%",
            fontFamily: "'Microsoft YaHei', sans-serif",
          }}
        >
          机票
        </h3>
      </div>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://pic.c-ctrip.com/flight/fuzzy/HAK/640.jpg"
          alt="门票"
        />
        <h3
          style={{
            ...contentStyle,
            bottom: "5%",
            fontFamily: "'Microsoft YaHei', sans-serif",
          }}
        >
          门票
        </h3>
      </div>
    </Carousel>
  </div>
);
export default TravelPage;
