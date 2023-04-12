import React, { Suspense } from "react";
// import { Spin } from "antd";

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp) => {
	return (
		<Suspense fallback={<div>loading...</div>} >
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
