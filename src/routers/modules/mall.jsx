import lazyLoad from "@/routers/lazyLoad.jsx";
// 首页模块

const mallRouter = [
			{
				path: "mall",
				element: lazyLoad('../views/Mall/index'),
				meta: {
					requiresAuth: true,
					title: "商城",
					key: "mall"
				}
			}
];

export default mallRouter;
