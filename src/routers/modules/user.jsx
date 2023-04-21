import lazyLoad from "@/routers/utils/lazyLoad.jsx";
// 首页模块
import {lazy} from "react";
const userRouter = [
	{
		path: "/home/user",
		element:lazyLoad(lazy(()=>import("@/views/User/index"))),
		meta: {
			requiresAuth: true,
			title: "用户",
			key: "user"
		},
		children:[
			{
				path: "/home/user/order",
				element: lazyLoad(lazy(()=>import("@/views/User/Order/index"))),
				meta: {
					requiresAuth: true,
					title: "订单",
					key: "userOrder"
				}
			},
		]

	}
];

export default userRouter;
