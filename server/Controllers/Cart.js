const mongoose = require("mongoose");
const product = require("../Models/ProductSchema");

const userData = require("../Models/UserSchema");
//function to get user id as a req and send info of cart to that user as a res

const AddToCart = async (req, res) => {
  try {
    const userID = req.params;
    // console.log(userID)
    // console.log(userID.id)
    const findUserdetails = await userData.findOne({ _id: userID.id });
    // console.log(findUserdetails)
    console.log(findUserdetails.cart);
    // // const productdetails =await product.find()
    // const productID = req.body.productId
    // const updateData =await userData.updateOne({_id:userID},{$push:{cart:`${productID}`}})
    res.send(findUserdetails.cart);
    // console.log(updateData)
    // console.log(productID,userID)
    // res.send(productID)
    // const result = await userData.find()
    // res.send(userID)
    // console.log(userID)
    // const userID = await req.body._id
    // res.send(userID)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const AddProductToCart = async (req, res) => {
  const userID = req.params;
  console.log(userID.id);
  // const productID = req.body.productId
  // console.log(productID)
  // const userdata= await userData.find()
  const CartDetails = await userData.updateOne(
    { _id: userID.id },
    {
      $push: {
        cart: {
          productId: `${req.body.productId}`,
          quantity: `${req.body.quantity}`,
        },
      },
    }
  );
  res.send("added data to cart array");
  console.log(CartDetails);
};

// const getProductDetailAddToCart=(req,res)=>{
//   const userId = req.body
//   console.log(userId)
//   res.send(userId)
// }

module.exports = { AddToCart, AddProductToCart};
