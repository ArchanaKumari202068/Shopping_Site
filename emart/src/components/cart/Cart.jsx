import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const handlecheckout =async() =>{
   try {
     const res = await axios.post(`http://localhost:5000/create-checkout-session/`,{
       id:checkUser.user
     })
     console.log(res.data.url)
     window.location.replace(res.data.url);
    //  navigate(res.data.url)
   } catch (error) {
    console.log(error)
    
   }

  }


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
        <div id="Card_container">
          <div id="Cart_header">
            <h1> My Cart</h1>
            {/* <h2>TotalPrice:{totalprice}</h2> */}
          </div>
          {items.map((ele) => {
            // return ele.product_details_title+" "
            console.log(ele);
            return (
              <div id="cartreuse_container">
                <Cartreuse
                  product_img={ele.product_img}
                  product_title={ele.product_details_title}
                  price={ele.product_price}
                  quantity={ele.user_quantity}
                  productId={ele._id}
                  getCartDetails={getCartDetails}
                  setTotalPrice={setTotalPrice}
                />
              </div>
            );
          })}
          <div id="cart_footer">
            <div id="cart_total_price">
              <p>TotalPrice:</p>
            </div>
            <div id="cart_price_details">
              <button>${totalprice}</button>
            </div>
          </div>
        </div>
        <div id="card_checkout">
          <div id="chechout_header">
            <p>Cart Totals</p>
          </div>
          <div id="checkout_content">
            <div className="checkout_price_div">
              <p>SubTotal: </p>
              <p>${totalprice}</p>
            </div>
            <div className="checkout_price_div">
              <p>Total: </p>
              <p>${totalprice}</p>
            </div>
          </div>
          <div id="checkout_btn">
            {/* <Link to="/checkout"> */}

            <button onClick={handlecheckout}>Checkout</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
