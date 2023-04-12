import User from "@/views/user/index";
import {LayoutIndex} from "@/routers/constant";
// 首页模块

const homeRouter = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/user/index",
				element: <User />,
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "user"
				}
			}
		]
	}
];

export default homeRouter;
