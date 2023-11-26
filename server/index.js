const express = require("express");
const {
  getAllProductDetails,
  getProductDetailsById,
  IncreamentOrDecreament,
  getAllProductByCategories,
} = require("./Controllers/Product.js");

const {
  AddToCart,
  AddProductToCart,
  deleteProductfromCart,
} = require("./Controllers/Cart.js");
const {
  LogInData,
  SignUpData,
  authenticateUser,
} = require("./Controllers/User.js");
// const {cartdata }= require("./Controllers/test.js");
const {
  postProductByReviews,
  getProductByReviews,
} = require("./Controllers/Reviews.js");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./Models/ProductSchema");
const app = express();
app.use(express.json());
const port = 5000;
// app.use(cors({
//   origin:['http://localhost:3000','${process.env.REACT_APP_BACKEND_URL}']
// }));
app.use(cors());
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
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
app.get("/cart/:id", AddToCart);

// app.post("/updateEmail",cartdata.updateEmail)

app.post("/auth", authenticateUser);

// app.get("/cart",getProductDetailAddToCart)

app.post("/cart/:id", AddProductToCart);
app.post("/quantity/:id", IncreamentOrDecreament);
app.put("/cart/:id", deleteProductfromCart);
app.get("/filter", getAllProductByCategories);
//Reviews post reviews ,get reviews by productID,

app.post("/reviews", postProductByReviews);
app.get("/reviews/:id", getProductByReviews);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
