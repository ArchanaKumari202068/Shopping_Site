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

const {AddToCart,AddProductToCart} =require("./Controllers/Cart.js")
const { LogInData, SignUpData, authenticateUser} = require("./Controllers/User.js");
// const {cartdata }= require("./Controllers/test.js");


const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("./Models/ProductSchema");
const app = express();
app.use(express.json())
const port = 5000;
// app.use(cors({
//   origin:['http://localhost:3000','http://localhost:5000']
// }));
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://Ishika123:Ishika123@cluster0.onpvdxd.mongodb.net/emart_database"
  )
  .then(() => {
    console.log("Connected to the database");
  });
app.use(express.json());

app.get("/ProductDetails", getAllProductDetails);

app.get("/ProductDetails/:ProductId", getProductDetailsById);
// app.get("/v3.1/contry/:name",getCountryByName)

app.post("/SignUp", SignUpData);
app.post("/login", LogInData);
// var id =req.params

//add to card route
app.get("/cart/:id",AddToCart);

// app.post("/updateEmail",cartdata.updateEmail)

app.post("/auth",authenticateUser)

// app.get("/cart",getProductDetailAddToCart)

app.post("/cart/:id",AddProductToCart)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
