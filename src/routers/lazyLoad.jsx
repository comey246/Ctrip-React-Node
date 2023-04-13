import React, { Suspense,lazy } from "react";
// import { Spin } from "antd";
/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */

const lazyLoad = (path) => {
	//将@符号路径换为相对路径
	// const absolutePath = path.replace('@','..')
	const Comp = lazy(() => import(path))
	return (
		<Suspense fallback={<div>loading...</div>} >
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
