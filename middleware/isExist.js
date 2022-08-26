const Product = require("../model/product");
const _ = require("lodash");

module.exports = async (ctx, next) => {
  try {
    const product = await Product.findById(ctx.request.params.id);
    if (!_.isEmpty(product)) {
      await next();
    } else {
      ctx.response.status = 404;
      ctx.body = "Product not found";
    }
  } catch (error) {
    ctx.response.status = 500;
    ctx.body = error.message;
  }
};
