import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import cartimage from "../assest/product-accessory1-400x400.jpg";
import "./Cartreuse.css";
import { contextCreated } from "../useContext/Context";

const Cartreuse = (props) => {
  var id = useContext(contextCreated);
  // console.log("userId", id.user);
  var [increment, setIncrement] = useState(props.quantity);
  const handleIncrement = async () => {
    setIncrement(increment + 1);
    const idOfProduct = await axios.post(
      `http://localhost:5000/quantity/${id.user}`,
      {
        prodId: props.productId,
        operation: "increment",
      }
    );
    console.log(idOfProduct);
  };

  const handleDecreament = async () => {
    setIncrement(increment - 1);
    const idOfProduct = await axios.post(
      `http://localhost:5000/quantity/${id.user}`,
      {
        prodId: props.productId,
        operation: "decrement",
      }
    );
    console.log(idOfProduct);
  };
  const handleDelete = async () => {

    try {
        console.log(props.productId);
        const deleteProductFromCart = await axios.put(
          `http://localhost:5000/cart/${id.user}`,
          {
            productId: props.productId,
          }
        );
        console.log(deleteProductFromCart);
        console.log("Check");
        props.getCartDetails(); 
    } catch (error) {
        alert("Eror occured")
        console.log(error)
    }
  };

  return (
    <>
      <div id="main_cart_div">
        <div id="cartimage">
          <img src={props.product_img}></img>
        </div>
        <div id="ProductDetails">
          <h3>{props.product_details_title}</h3>
          <p>Product details</p>
        </div>
        <div id="quantity">
          <div id="decrement">
            <p onClick={handleDecreament}>-</p>
          </div>
          <h3>{increment}</h3>
          <div id="increment">
            <p onClick={handleIncrement}>+</p>
          </div>
        </div>
        <div id="ProductSummary">
          <p>Price: {props.price*increment}</p>
          <p>Save for later</p>
          <p onClick={handleDelete}>Remove </p>
        </div>
      </div>
    </>
  );
};

export default Cartreuse;
