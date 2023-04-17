import qs from "qs";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginPost = (params) => {
	return http.post(`/login`, params);
	return http.post(`/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	return http.post(`/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
	return http.post(`/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};
export const regPost = (params) => {
	return http.post(`/register`, params);
	return http.post(`/register`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	return http.post(`/register`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
	return http.post(`/register`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
}
export const publickKeyGet = (params) => {
	return http.get(`/publicKey/`,params);

};
// * 获取按钮权限
export const getAuthorButtons = () => {
	return http.get(PORT1 + `/auth/buttons`);
};

// * 获取菜单列表
export const menuListGet = () => {
	return http.get( `/menu/list`);
};
