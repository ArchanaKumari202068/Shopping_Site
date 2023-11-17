import React,{useEffect} from "react";
import "./Cart.css";
import Cartreuse from "./Cartreuse";
import axios from 'axios'
// import axios from "axios";

// import { useEffect } from "react";
// import ProductCards from "../Products/ProductCards";
const Cart = () => {
  // const [product, setProduct] = useState();
  // // const handlecartdetails=()=>{

  // // }
  useEffect(()=>{
    try{

      axios.get("http://localhost:5000/cart/:id", {
      });
    }catch(err){

    }
  },[])

  return (
    <div className="Cart_page">
      <h1>Cart</h1>
      <Cartreuse />
    </div>
  );
};

export default Cart;
