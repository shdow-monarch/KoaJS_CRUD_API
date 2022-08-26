const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  model: String,
  processor: String,
  cost: Number,
});

module.exports = model("product", productSchema);
