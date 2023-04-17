import "./index.css";
import React, {Fragment} from "react";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
const Index = () => {
    const navigate = useNavigate()
    const a = ()=> {
        navigate("/user/order")
    }
    return (
        <Fragment>
            <button onClick={a}>user</button>
            <div style={{border:"1px solid red"}}><h2>这是商城在views/mall</h2></div>
        </Fragment>
    );
};

export default Index;