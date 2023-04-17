import * as type from "@/redux/constant"
// * setToken
export const setToken = (token) => ({
	type: type.SET_TOKEN,
	token
});