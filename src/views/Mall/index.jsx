import "./index.css";
import { useNavigate } from "react-router-dom";
import React, {Fragment} from "react";
import {Button} from "antd";
const Home = () => {
    return (
        <Fragment><div style={{border:"1px solid red"}}><h2>这是主页在views/home</h2></div>
        </Fragment>
    );
};

export default Home;