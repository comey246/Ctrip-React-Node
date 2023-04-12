import Home from "@/views/home/index";
import {LayoutIndex} from "@/routers/constant";
// 首页模块

const homeRouter = [
	// {
	// 	element: <LayoutIndex />,
	// 	children: [
			{
				path: "/home/home",
				element: <Home />,
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
	// 	]
	// }
];

export default homeRouter;
