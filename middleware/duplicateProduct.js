const Product = require("../model/product");
const _ = require("lodash");

module.exports = async (ctx, next) => {
  try {
    const product = await Product.find({ model: ctx.request.body.model });
    if (_.isEmpty(product)) {
      await next();
    } else {
      ctx.response.status = 422;
      ctx.body = "Product already exist";
    }
  } catch (error) {
    ctx.response.status = 500;
    ctx.body = error.message;
  }
};
