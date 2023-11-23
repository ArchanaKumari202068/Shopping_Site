// import mongoose from "mongoose";
const mongoose = require("mongoose");
// import ProductSchema from "../Models/ProductSchema"
// import UserSchema from "../Models/UserSchema.js"
const UserData = require("../Models/UserSchema.js");
const Product = require("../Models/ProductSchema");

const getAllProductDetails = async (req, res) => {
  try {
    const ProductList = await Product.find();
    res.status(200).json(ProductList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getProductDetailsById = async (req, res) => {
  console.log(req.params);
  const id = req.params.ProductId;

  const product = await Product.findById(id);
  // console.log(product)

  res.status(200).send(product);
  // const ProductIddetails =Product.findById()
  // res.status(200).json(ProductIddetails )
};

const IncreamentOrDecreament = async (req, res) => {
  try {
    const id = req.params.id;
    const productId = req.body.prodId;
    console.log("User Id", id);
    const User = await UserData.findOne({ _id: id });
    console.log("User", User);

    console.log("get data", User.cart[0].productId);
    if (req.body.operation == "increment") {
      const increamentQuantity = await UserData.updateOne(
        { _id: id, "cart.productId": productId },
        { $inc: { "cart.$.quantity": 1 } }
      );
      console.log(increamentQuantity);
    } else {
      const decreamentQuantity = await UserData.updateOne(
        { _id: id, "cart.productId": productId },
        { $inc: { "cart.$.quantity": -1 } }
      );
      console.log("decrement quntity of the product:", decreamentQuantity);
    }
    // console.log("User cart", User.cart);
    // console.log(userDetails)
    res.send("get increment product quantity");
  } catch (err) {
    console.log("Error in Increemntign the qutnaitty", err);
  }
};

const getAllProductByCategories = async (req, res) => {
  try {
    // const filterByPrice = req.query.price
    const categories = req.query.category;
    const priceGt = req.query.price_gt;
    const reviews = req.query.reviews
    // const priceLt = req.query.price_lt

    console.log(req.query);
    var filter = [];
    var sortBY = {};

    if (categories) {
      filter.push({ product_categories: categories });
    }
    if (priceGt) {
      filter.push({ product_price: { $gte: priceGt } });
    }
    if (reviews){
      filter.push({})
    }
    const filterPrice = req.query.sortByPrice;
    // const highToLow = req.query.sortByPrice
    if (filterPrice == "highToLow") {
      // sortBY[pricelh]
      sortBY["product_price"] = -1;
    }
    if (filterPrice == "lowToHigh") {
      sortBY["product_price"] = 1;
    }
    console.log(sortBY);
    console.log("Filters",filter)
    if (filter.length == 0) {
      const getAllProductByCategories = await Product.find().sort(sortBY);

      res.send(getAllProductByCategories);
    } else {
     
      const getAllProductByCategories = await Product.find({
        // product_categories: categories,
        // product_price:{$gte:priceGt},
        // product_price:{$lte:priceLt},
        // product_price:{$eq:filterByPrice}
        $and: filter,
      }).sort(sortBY);
      console.log(filter);
      console.log(sortBY);
      console.log("check getAllProductByCategories");

      res.send(getAllProductByCategories);
      //sorting based on requirement
    }
  } catch (err) {
    console.log("error in getting product by categories", err);
    res.status(500).send("internal server error");
  }
};

module.exports = {
  getAllProductDetails,
  getProductDetailsById,
  IncreamentOrDecreament,
  getAllProductByCategories,
};
