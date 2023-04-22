import * as type from "@/redux/constant"

//设置collapse
export const updateCollapse = (isCollapse) => ({
	type: type.UPDATE_COLLAPSE,
	isCollapse
});
export const setMobile = (isMobile) => ({
	type: type.SET_MOBILE,
	isMobile
});
export const setMenuList = (menuList) => ({
	type: type.SET_MENU_LIST,
	menuList
});