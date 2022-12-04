let Router = require("koa-router");
let router = new Router();
let api = require("./api");
router.use("/api", api.routes(), api.allowedMethods());

module.exports = router;
