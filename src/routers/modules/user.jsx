import lazyLoad from "@/routers/lazyLoad.jsx";
import {Navigate} from "react-router-dom";
// 首页模块

const userRouter = [
	{
		path: "user",
		element: lazyLoad("../views/User/index"),
		// element:<Navigate to="/user/order" />,
		meta: {
			requiresAuth: true,
			title: "用户",
			key: "user"
		},
		children:[
			{
				path: "order",
				element: lazyLoad("../views/User/Order/index"),
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
