import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);
let router = new VueRouter({
	routes,
	mode: "history",
});
router.beforeEach((to, from, next) => {
	// let element = document.querySelector('html');
	// if (element) {// 每次切换页面重新使滚动条回到顶端
	// 	element.scrollTop=0
	// }
	next();
});
export default router;
