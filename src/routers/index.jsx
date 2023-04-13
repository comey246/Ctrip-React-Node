import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/Login";
import {LayoutIndex} from "@/routers/constant.jsx";
import Layouts from "@/layouts/index.jsx";
import Home from "@/views/Mall/index.jsx";
import User from "@/views/User/index.jsx";
import lazyLoad from "@/routers/lazyLoad.jsx";

// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.jsx");
// * 处理路由
export const routerArray = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key) => {
		routerArray.push(...metaRouters[item][key]);
	});
});
console.log(routerArray)
export const rootRouter = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	{
		element: <Layouts />,
		meta: {
			requiresAuth: false,
			title: "主页",
			key: "home"
		},
		children: [
			...routerArray
		]
	},
	// ...routerArray,
	{
		path: "*",
		element: <Navigate to="/login" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
