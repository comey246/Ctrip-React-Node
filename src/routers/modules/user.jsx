import lazyLoad from "@/routers/lazyLoad.jsx";
// 首页模块

const homeRouter = [
	{
		path: "/User",
		element: lazyLoad("../views/User/index"),
		meta: {
			requiresAuth: true,
			title: "首页",
			key: "user"
		}
	}
];

export default homeRouter;
