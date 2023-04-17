import lazyLoad from "@/routers/lazyLoad.jsx";
import {Navigate} from "react-router-dom";
// 首页模块

const adminRouter = [
	{
		path: "admin",
		element: lazyLoad("../views/Admin/index"),
		// element:<Navigate to="/admin/order" />,
		meta: {
			requiresAuth: true,
			title: "管理员",
			key: "admin"
		},
		children:[
			{
				path: "order",
				element: lazyLoad("../views/Admin/Order/index"),
				meta: {
					requiresAuth: true,
					title: "订单管理",
					key: "adminOrder"
				}
			},
			{
				path: "user",
				element: lazyLoad("../views/Admin/User/index"),
				meta: {
					requiresAuth: true,
					title: "用户管理",
					key: "adminUser"
				}
			},
		]

	}
];

export default adminRouter;
