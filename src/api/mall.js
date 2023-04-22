import qs from "qs";

import http from "@/api";

export const getFlightList = (params) => {
    return http.get(`/mall/flight/list`,params);
};