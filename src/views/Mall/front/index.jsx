import { Carousel } from "antd";
import "./index.less";

const TravelPage = () => (
  <div className="wrapper">
    <Carousel autoplay>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://pic.c-ctrip.com/flight/fuzzy/HET/640.jpg"
          alt="酒店"
        />
        <h3>酒店</h3>
      </div>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://pic.c-ctrip.com/flight/fuzzy/DLC/640.jpg"
          alt="机票"
        />
        <h3>机票</h3>
      </div>
      <div className="carousel-item">
        <img
          className="carousel-image"
          src="https://pic.c-ctrip.com/flight/fuzzy/HAK/640.jpg"
          alt="门票"
        />
        <h3>门票</h3>
      </div>
    </Carousel>
  </div>
);
export default TravelPage;
