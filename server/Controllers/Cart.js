const mongoose = require("mongoose");
const product = require("../Models/ProductSchema");

const userData = require("../Models/UserSchema");
//function to get user id as a req and send info of cart to that user as a res

const AddToCart = async (req, res) => {
  try {
    const userID = req.params;
    // console.log(userID)
    console.log("inside add to cart", userID.id);
    const findUserdetails = await userData.findOne({ _id: userID.id });
    // console.log(findUserdetails)
    console.log(findUserdetails.cart);
    // // const productdetails =await product.find()
    // const productID = req.body.productId
    // const updateData =await userData.updateOne({_id:userID},{$push:{cart:`${productID}`}})
    // res.send(findUserdetails.cart);
    var x = findUserdetails.cart;
    // console.log("productId");
    const cartItems = [];
    // console.log(cartItems)
    for (let i = 0; i < x.length; i++) {
      const productDetails = await product.findById({
        _id: x[i].productId,
      });
      cartItems.push({ ...productDetails._doc, user_quantity: x[i].quantity });

      console.log(cartItems[i]);
    }
    res.send(cartItems);
    // var cartDetails =  findUserdetails.cart

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
  try {
    const userID = req.params.id;
    console.log("AddProductToCart", userID);
    const productID = req.body.productId;
    // console.log(productID)
    // const userdata= await userData.find()
    const UserDetails = await userData.findOne({
      _id: userID,
    });
    const UserCart = UserDetails.cart;
    console.log(UserCart);
    for (let i = 0; i < UserCart.length; i++) {
      if (UserDetails.cart[i].productId == productID) {
        console.log("already product in the cart");
        return res.send("already product in the cart");
      }
    }

    const CartDetails = await userData.updateOne(
      { _id: userID },
      {
        $push: {
          cart: {
            productId: req.body.productId,
            quantity: req.body.quantity,
          },
        },
      }
    );
    res.send("added data to cart array");
    console.log(CartDetails);
  } catch (err) {
    console.log("Error in adding to cart", err);
  }
};

const deleteProductfromCart = async (req, res) => {
  const Userid = req.params.id;
  console.log("id of the user ", Userid);
  // console.log(req.body)
  const ProductId = req.body.productId;
  console.log("product id of the user:", ProductId);
  try {
    const deleteProductCart = await userData.updateOne(
      { _id: Userid },
      { $pull: { cart: { productId: ProductId } } }
    );
    console.log("delete product from cart:", deleteProductCart);
    res.send("Deleted the product from cart");
  } catch (err) {
    console.log("Error in deleting the product from the cart: ", err);
  }
};
// const getProductDetailAddToCart=(req,res)=>{
//   const userId = req.body
//   console.log(userId)
//   res.send(userId)
// }

module.exports = { AddToCart, AddProductToCart, deleteProductfromCart };
