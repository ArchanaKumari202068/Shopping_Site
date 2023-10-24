// import express from 'express';
// import { getAllProductDetails } from "./Controllers/Product"
// import getAllProductDetails from "./Controllers/Product.js"

// const express = require("express");
// const { getAllProductDetails } = require("./Controllers/Product.js");
// const data = require("data");
// const app = express();
// app.get("/ProductDetails", getAllProductDetails);
// app.get("/data", data);
// const PORT = process.env.PORT || 5000

const express = require("express");
const {
  getAllProductDetails,
  getProductDetailsById,
} = require("./Controllers/Product.js");

const { LogInData, SignUpData } = require("./Controllers/User.js")

const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("./Models/ProductSchema");
const app = express();
const port = 5000;
app.use(cors());
const connectDB = mongoose.connect(
  "mongodb+srv://Ishika123:Ishika123@cluster0.onpvdxd.mongodb.net/emart_database"
);

app.get("/ProductDetails", getAllProductDetails);

app.get("/ProductDetails/:ProductId", getProductDetailsById);

app.post("/SignUp",SignUpData);
app.post("/login",LogInData);
// var id =req.params

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
