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
  props.setTotalPrice((prev)=> prev+props.price)

    const idOfProduct = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/quantity/${id.user}`,
      {
        prodId: props.productId,
        operation: "increment",
      }
    );
    console.log(idOfProduct);
  };

  const handleDecreament = async () => {
    setIncrement(increment - 1);
    props.setTotalPrice((prev)=> prev-props.price)

    const idOfProduct = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/quantity/${id.user}`,
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
        `${process.env.REACT_APP_BACKEND_URL}/cart/${id.user}`,
        {
          productId: props.productId,
        }
      );
      console.log(deleteProductFromCart);
      console.log("Check");
      props.getCartDetails();
    } catch (error) {
      alert("Eror occured");
      console.log(error);
    }
  };

  return (
    <>
      <div id="main_cart_div">
        <div id="cartimage">
          <img src={props.product_img}></img>
        </div>
        <div id="ProductDetails">
          {/* <h3>{props.product_details_title}</h3> */}
          <p>{props.product_title}</p>
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
          <p>Price: ${props.price * increment}</p>
          <div id="Remove_productToCart" onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {/* <button onClick={handleDelete}>Remove </button> */}
        </div>
      </div>
    </>
  );
};

export default Cartreuse;
