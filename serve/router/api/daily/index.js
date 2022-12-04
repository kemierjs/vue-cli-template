let Router = require("koa-router");
let router = new Router();
router.get("/user/list", (ctx) => {
    ctx.body = [{
        name: "zs",
        age: 18
    }];
});
module.exports = router;
