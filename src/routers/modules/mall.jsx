import lazyLoad from "@/routers/utils/lazyLoad.jsx";
import {lazy} from "react";
// 首页模块

const mallRouter = [
			{
				path: "/home/mall",
				element: lazyLoad(lazy(()=>import('@/views/Mall/index.jsx'))),
				meta: {
					requiresAuth: false,
					title: "商城",
					key: "mall"
				},
				children:[
					{
						path: "/home/mall/index",
						element: lazyLoad(lazy(()=>import("@/views/Mall/Home/index.jsx"))),
						meta: {
							requiresAuth: false,
							title: "商城首页",
							key: "mallIndex"
						}
					},
					{
						path: "/home/mall/hotel",
						element: lazyLoad(lazy(()=>import("@/views/Mall/Hotel/index.jsx"))),
						meta: {
							requiresAuth: false,
							title: "酒店",
							key: "mallHotel"
						}
					},
					{
						path: "/home/mall/flight",
						element: lazyLoad(lazy(()=>import("@/views/Mall/Flight/index.jsx"))),
						meta: {
							requiresAuth: false,
							title: "机票",
							key: "mallPlane"
						}
					},
					{
						path: "/home/mall/ticket",
						element: lazyLoad(lazy(()=>import("@/views/Mall/Ticket/index.jsx"))),
						meta: {
							requiresAuth: false,
							title: "门票",
							key: "mallTicket"
						}
					},
				]
			}
];

export default mallRouter;
