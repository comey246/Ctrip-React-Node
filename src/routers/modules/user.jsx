import lazyLoad from "@/routers/lazyLoad.jsx";
// 首页模块

const userRouter = [
	{
		path: "/user",
		element: lazyLoad("../views/User/index"),
		meta: {
			requiresAuth: true,
			title: "用户",
			key: "user"
		},
		children:[
			{
				path: "orders",
				element: lazyLoad("../views/User/Order/index"),
				meta: {
					requiresAuth: true,
					title: "订单",
					key: "userorders"
				}
			},
		]

	}
];

export default userRouter;
