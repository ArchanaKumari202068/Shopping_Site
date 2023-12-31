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

//filter product by categories, pprice,rating,lateest
const getAllProductByCategories = async (req, res) => {
  try {
    // const filterByPrice = req.query.price
    const categories = req.query.category;
    const priceGt = req.query.price_gt;
    const rating = req.query.rating;
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
    if (rating) {
      filter.push({ rating: { $gte: rating } });
    }

    const sortByValue = req.query.sortBy;
    if (sortByValue == "highToLowPrice") {
      sortBY["product_price"] = -1;
    }
    if (sortByValue == "lowToHighPrice") {
      sortBY["product_price"] = 1;
    }
    if (sortByValue == "hTolwRating") {
      sortBY["product_Avgrating"] = -1;
    }
    if (sortByValue == "lwToHRating") {
      sortBY["product_Avgrating"] = 1;
    }
    console.log(sortBY);
    console.log("Filters", filter);
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

//Function for getProducts Navigation

const getProducts = async (req, res) => {
  try {
    const limit = req.query.limit;
    const skip = req.query.skip;
    const search = req.query.search;
    let filter = {};
    if (search) {
      filter = {
        product_details_title: { $regex: `.*${search}.*`, $options: "i" },
      };
    }
    const totalCount = await Product.find(filter).count();
    const ProductData = await Product.find(filter).skip(skip).limit(limit);
    // console.log(ProductData)
    // const totalproduct
    // res.status(200)
    res.send({
      ProductData: ProductData,
      totalPages: totalCount / limit,
      totalProducts: totalCount,
    });
  } catch (err) {
    console.log("error in get productpagination", err);
    res.status(500).send("Internal Server Error");
  }
};

//function to searched product

// const searchProducts = async (req, res) => {
//   try {
//     const searchedProductTitle = req.query.title;

//     const getSearchedProducts = await Product.aggregate([
//       { $match: { product_details_title: searchedProductTitle } },
//     ]);
//     console.log("get searched products ", getSearchedProducts);
//     res.status(200).send(getSearchedProducts);
//   } catch (err) {
//     console.log("Error in searching the products", err);
//     res.send("Internal Server error");
//   }
// };

//function for searching products

module.exports = {
  getAllProductDetails,
  getProductDetailsById,
  IncreamentOrDecreament,
  getAllProductByCategories,
  getProducts,
};
