import lazyLoad from "@/routers/lazyLoad.jsx";
// 首页模块

const homeRouter = [
			{
				path: "/home",
				element: lazyLoad('../views/Mall/index'),
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
];

export default homeRouter;
