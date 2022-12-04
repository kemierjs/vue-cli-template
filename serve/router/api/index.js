let Router = require("koa-router");
let router = new Router();
let daily = require("./daily");

router.use(daily.routes(), daily.allowedMethods());

module.exports = router;
