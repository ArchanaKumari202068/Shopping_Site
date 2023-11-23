//created product schema
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  product_img: { type: String },
  product_details_title: { type: String },
  product_price: { type: Number },
  product_Avgrating:{type:Number,default:0},
  product_quantity: { type: Number },
  product_categories: { type: String },
  product_about: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
