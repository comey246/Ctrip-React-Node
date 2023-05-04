import React, {Fragment} from "react";
import SearchBar from "@/views/Mall/Flight/SearchBar/index.jsx";
import FlightList from "@/views/Mall/Flight/FlightList/index.jsx";

import "./index.css";
const Index = (props) => {

    return (
        <Fragment>
                <SearchBar></SearchBar>
            <FlightList></FlightList>
        </Fragment>
    );
}
export default Index;