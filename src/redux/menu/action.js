import * as type from "@/redux/constant"

//设置collapse
export const updateCollapse = (isCollapse) => ({
	type: type.UPDATE_COLLAPSE,
	isCollapse
});

export const setMenuList = (menuList) => ({
	type: types.SET_MENU_LIST,
	menuList
});