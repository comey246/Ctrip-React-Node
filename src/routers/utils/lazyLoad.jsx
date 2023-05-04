import React, {lazy, Suspense} from "react";
import { Spin } from "antd";
/**
 * @description 路由懒加载
 * @param {string} Comp 需要访问的组件
 * @returns function(): *
 */

const lazyLoad = (Comp) => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			<Comp />
		</Suspense>
	);
};


export default lazyLoad;
