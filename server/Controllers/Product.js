// import mongoose from "mongoose";
const mongoose =require('mongoose')
// import ProductSchema from "../Models/ProductSchema"
const Product =require("../Models/ProductSchema")

 const getAllProductDetails = async(req,res) => {
    try{
        
        const ProductList = await Product.find()
        res.status(200).json(ProductList)
        

    }catch(err){
        res.status(500).json({message:err.message})
    }
} 
const getProductDetailsById = async(req,res) =>{
    console.log(req.params);
    const id =req.params.ProductId

    const product = await Product.findById(id);

    res.status(200).send(product)
    // const ProductIddetails =Product.findById()
    // res.status(200).json(ProductIddetails )
}

module.exports ={ getAllProductDetails,getProductDetailsById  };