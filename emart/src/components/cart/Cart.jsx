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
  const [totalprice, setTotalPrice] = useState(0);
  console.log("items data", items);
  console.log(checkUser);
  console.log("checkuser", checkUser.user);
  const calTotal = () => {
    var totalPriceOfCardProduct = 0;
    console.log("Length of Cart", items.length);
    for (let i = 0; i < items.length; i++) {
      var price = items[i].product_price * items[i].user_quantity;
      totalPriceOfCardProduct += price;
      console.log("price of the items", price);
    }
    // totalPriceOfCardProduct = price;
    console.log("total price", totalPriceOfCardProduct);
    setTotalPrice(totalPriceOfCardProduct);
  };

  async function getCartDetails() {
    try {
      // const userId = id.setUser()
      const id = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${checkUser.user}`
      );


      // console.log("id.data", id.data);
      var x = id.data;
      console.log(x);
      setItems(x);

      // console.log(productId)
    } catch (err) {
      console.log("eror in getting the cart products", err);
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      // alert("login or signupp")
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getCartDetails();
    
  }, [checkUser]);

  useEffect(() => {
    calTotal();
  }, [items]);
  if (checkUser.user == null) {
    return <h1>Hello</h1>;
  }

  return (
    <>
      <div className="Cart_page">
        <div id="Cart_header">
          <h1>Cart</h1>
          <h2>TotalPrice:{totalprice}</h2>
        </div>
        {items.map((ele) => {
          // return ele.product_details_title+" "
          console.log(ele)
          return (
            <Cartreuse
              product_img={ele.product_img}
              products_titles={ele.product_details_title}
              price={ele.product_price}
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
