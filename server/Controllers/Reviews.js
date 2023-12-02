const mongoose = require("mongoose");
const product = require("../Models/ProductSchema");
const Reviews = require("../Models/Reviews");
const userDetails = require("../Models/UserSchema");
// const product =require("../Models/UserSchema")
const postProductByReviews = async (req, res) => {
  try {
    const rating = req.body.rating;
    const reviewsProduct = req.body.reviews;
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    const postedOn = req.body.postedOn;
    // console.log("Posted On",postedOn)
    const postProducts = await Reviews.create({
      user_id: user_id,
      product_id: product_id,
      reviews: reviewsProduct,
      rating: rating,
      postedOn: new Date(postedOn),
    });

    const calAvgRating = await Reviews.aggregate([
      {
        $match: {
          product_id: new mongoose.Types.ObjectId(product_id),
        },
      },
      {
        $group: {
          _id: "$product_id",
          product_Avgrating: { $avg: "$rating" },
        },
      },
    ]);
    console.log(calAvgRating[0].product_Avgrating);
    const updateRating = await product.updateOne(
      { _id: product_id },
      { $set: { product_Avgrating: calAvgRating[0].product_Avgrating } }
    );
    console.log(updateRating);
    res.status(200).send(postProducts);
  } catch (err) {
    console.log("error in posting the product by reviews", err);
    res.status(500);
  }
};
const getProductByReviews = async (req, res) => {
  try {
    const product_id = req.params.id;
    const getUserId = await Reviews.aggregate([
      { $match: { product_id: new mongoose.Types.ObjectId(product_id) } },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "UserId",
        },
      },
    ]);
    console.log(getUserId);
    console.log(product_id);
    // const getProduct = await Reviews.find({ product_id: product_id });
    res.status(200).send(getUserId);
  } catch (error) {
    console.log("error in getting the product by reviews", error);
    res.status(500);
  }
};
module.exports = { postProductByReviews, getProductByReviews };
