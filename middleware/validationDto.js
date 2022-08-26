const schema = require("../dto/productDto");

module.exports = async (ctx, next) => {
  try {
    await schema.validateAsync(ctx.request.body);
    await next();
  } catch (error) {
    return (ctx.body = error.message);
  }
};
