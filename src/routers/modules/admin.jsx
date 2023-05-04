import lazyLoad from "@/routers/utils/lazyLoad.jsx";
// 首页模块
import {lazy} from "react";

const adminRouter = [
	{
		path: "/home/admin",
		element: lazyLoad(lazy(()=>import("@/views/Admin/index"))),
		meta: {
			requiresAuth: "admin",
			title: "管理员",
			key: "admin"
		},
		children:[
			{
				path: "/home/admin/order",
				element: lazyLoad(lazy(()=>import("@/views/Admin/Order/index"))),
				meta: {
					requiresAuth: "admin",
					title: "订单管理",
					key: "adminOrder"
				}
			},
			{
				path: "/home/admin/user",
				element: lazyLoad(lazy(()=>import("@/views/Admin/User/index"))),
				meta: {
					requiresAuth: "admin",
					title: "用户管理",
					key: "adminUser"
				}
			},
		]

	}
];

export default adminRouter;
