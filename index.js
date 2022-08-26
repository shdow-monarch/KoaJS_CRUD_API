const koa = require("koa");
const router = require("./routes");
require("./config");

const app = new koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started"));
