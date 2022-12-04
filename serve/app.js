let Koa = require("koa");
let router = require("./router");
let koa = new Koa();

koa.use(router.routes())
	.use(router.allowedMethods());

koa.listen(3000, () => {
	console.log("http://localhost:3000");
});
