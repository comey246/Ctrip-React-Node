import * as type from "@/redux/constant"
// * setToken
export const setToken = (token) => ({
	type: type.SET_TOKEN,
	token
});

export const setUsername = (username) => ({
	type: type.SET_USERNAME,
	username
});