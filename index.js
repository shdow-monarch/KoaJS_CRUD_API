const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("koa-router")();
const app = new koa();

app.use(router.routes()).use(router.allowedMethods());
app.use(bodyParser());

router.get("/test", (ctx) => {
  ctx.response.body = "Hello World from router";
});

app.use((ctx) => (ctx.body = "Hello world from koa"));

app.listen(3000, () => console.log("Server started"));
