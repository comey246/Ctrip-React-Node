import qs from "qs";

import http from "@/api";

export const getFlightList = (params) => {
    return http.get(`/mall/flight/list`,params);
};
export const getFlight = (params) => {
    return http.get(`/mall/flight`,params);
};
export const bookFlight = (params) => {
    return http.post(`/mall/flight/book`,params);
    return http.post(`/mall/flight/book`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
    return http.post(`/mall/flight/book`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
    return http.post(`/mall/flight/book`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};
export const payFlight = (params) => {
    return http.post(`/mall/flight/pay`,params);
    return http.post(`/mall/flight/pay`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
    return http.post(`/mall/flight/pay`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
    return http.post(`/mall/flight/pay`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};