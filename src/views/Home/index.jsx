import "./index.css";
import { useNavigate } from "react-router-dom";
import React, {Fragment} from "react";
import {Button} from "antd";
const Home = () => {
    const navigate = useNavigate()
    const goHome = () => navigate('/user/index')
    return (
        <Fragment><div style={{border:"5px solid black"}}><h2>home</h2></div>
            <Button onClick={goHome}>gohome</Button>
        </Fragment>
    );
};

export default Home;