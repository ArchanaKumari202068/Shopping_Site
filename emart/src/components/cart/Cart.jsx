import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Cartreuse from "./Cartreuse";
import axios from "axios";
import { contextCreated } from "../useContext/Context";
// import axios from "axios";

// import { useEffect } from "react";
// import ProductCards from "../Products/ProductCards";
const Cart = (props) => {
  const navigate = useNavigate();
  const checkUser = useContext(contextCreated);
  const [items, setItems] = useState([]);
  console.log("items data", items);

  console.log(checkUser);

  console.log("checkuser", checkUser.user);
  async function getCartDetails() {
    try {
      // const userId = id.setUser()
      const id = await axios.get(
        `http://localhost:5000/cart/${checkUser.user}`
      );

      // console.log("id.data", id.data);
      var x = id.data;
      console.log(x);
      setItems(x);

      // console.log(productId)
    } catch (err) {}
  }

  useEffect(() => {
    if (checkUser.user == null) {
      // alert("login or signupp")
      navigate("/login");
    } else {
      getCartDetails();
    }
  }, []);

  if (checkUser.user == null) {
    return <h1>Helloc</h1>;
  }

  return (
    <>
      <div className="Cart_page">
        <h1>Cart</h1>
        {items.map((ele) => {
          // return ele.product_details_title+" "
          return (
            <Cartreuse
              product_img={ele.product_img}
              products_titles={ele.product_details_title}
              price={ele.product_price*ele.user_quantity}
              quantity={ele.user_quantity}
              productId={ele._id}
              getCartDetails={getCartDetails}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
