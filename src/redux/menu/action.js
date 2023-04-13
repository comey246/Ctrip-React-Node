import * as type from "@/redux/constant"

//设置collapse
export const updateCollapse = (isCollapse) => ({
	type: type.UPDATE_COLLAPSE,
			isCollapse
});