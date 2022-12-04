export default [
	{
		path: "/",
		component: () => import("@/layouts/default.vue"),
		redirect: "/eat",
		children: [
			{
				path: "eat",
				component: () => import("@/pages/daily/eat.vue")
			},
			{
				path: "sleep",
				component: () => import("@/pages/daily/sleep.vue")
			},
			{
				path: "play",
				component: () => import("@/pages/daily/play.vue")
			}
		]
	},
	{
		path: "*",
		component: () => import("@/pages/404.vue")
	}
];
