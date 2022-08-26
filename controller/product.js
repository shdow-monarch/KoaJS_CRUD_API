const _ = require("lodash");
const Product = require("../model/product");

const ProductController = {
  getAllProduct: async (ctx) => {
    try {
      const products = await Product.find();
      ctx.response.status = 200;
      ctx.body = products;
    } catch (error) {
      ctx.response.status = 500;
      ctx.body = error.message;
    }
  },
  createProduct: async (ctx) => {
    try {
      const newProduct = new Product(ctx.request.body);
      const result = await newProduct.save();
      ctx.response.status = 201;
      ctx.body = result;
    } catch (error) {
      ctx.response.status = 422;
      ctx.body = error.message;
    }
  },
  getProduct: async (ctx) => {
    try {
      const product = await Product.findById(ctx.request.params.id);
      ctx.response.status = 200;
      ctx.body = product;
    } catch (error) {
      ctx.response.status = 500;
      ctx.body = error.message;
    }
  },
  updateProduct: async (ctx) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        ctx.request.params.id,
        ctx.request.body,
        { new: true }
      );
      ctx.response.status = 200;
      ctx.body = await updatedProduct;
    } catch (error) {
      ctx.response.status = 422;
      ctx.body = error.message;
    }
  },
  removeProduct: async (ctx) => {
    try {
      await Product.findByIdAndDelete(ctx.request.params.id);
      ctx.response.status = 200;
      ctx.body = "Product deleted";
    } catch (error) {
      ctx.response.status = 500;
      ctx.body = error.message;
    }
  },
};

module.exports = ProductController;
