const mongoose = require("mongoose");
const userData = require("../Models/UserSchema")
const productData = require("../Models/ProductSchema")
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const createCheckout =async(req,res) =>{
    try {
        const userId = await userData.findOne({ _id:req.body.id})
        // console.log(userId.cart)
        const cartItems =userId.cart
        const buyItems = [];
        for(let i= 0;i<cartItems.length;i++){
            console.log(cartItems[i].productId)
            const getProductDetails = await productData.findOne({_id:cartItems[i].productId})
            console.log(getProductDetails.product_details_title)
            console.log(getProductDetails.product_price)
            buyItems.push({
                price_data: {
                    currency: 'inr',
                    product_data:{
                        name: getProductDetails.product_details_title
                    },
                    unit_amount: getProductDetails.product_price * 100
                },
                quantity: cartItems[i].quantity
            })
        }



        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode:'payment',
            line_items:buyItems,
            success_url:`${process.env.CLIENT_URL}/payment_successfull`,
            cancel_url:`${process.env.CLIENT_URL}/cancel.html`

        })
        
        res.json({url:session.url})
    } catch (err) {
        console.log("error in payment",err)
        res.status(500).json({error:err.message})
    }

}
module.exports = {createCheckout}