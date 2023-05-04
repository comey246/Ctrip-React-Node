import React, { Fragment } from "react";

import TravelPage from "@/views/Mall/Home/front/index.jsx";
import ProductList from "@/views/Mall/Home/shangcheng/index.jsx";
import SearchBar from "@/views/Mall/Flight/SearchBar/index.jsx";
import "./index.css";


const Index = (props) => {
    const page = "home"
  return (
    <Fragment>
        <TravelPage ></TravelPage>
        <SearchBar page={page}></SearchBar>
        <ProductList ></ProductList>
    </Fragment>
  );
};
export default Index;
