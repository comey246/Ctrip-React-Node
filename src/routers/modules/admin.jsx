import lazyLoad from "@/routers/lazyLoad.jsx";
// 首页模块

const adminRouter = [
	{
		path: "/admin",
		element: lazyLoad("../views/User/index"),
		meta: {
			requiresAuth: true,
			title: "管理员",
			key: "admin"
		},
		children:[
			{
				path: "ordermanage",
				element: lazyLoad("../views/Admin/Order/index"),
				meta: {
					requiresAuth: true,
					title: "订单管理",
					key: "adminorder"
				}
			},
			{
				path: "usermanage",
				element: lazyLoad("../views/Admin/User/index"),
				meta: {
					requiresAuth: true,
					title: "用户管理",
					key: "adminuser"
				}
			},
		]

	}
];

export default adminRouter;
