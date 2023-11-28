import React from "react";
import { Link } from "react-router-dom";
// import Payment_animation from "../../assest/Animation_payment.gif"

import Animation_payment2 from "../../assest/Animation_payment2.gif";
import "./Payment_success.css";
const PaymentSuccessful = () => {
  return (
    <>
      <div id="Payment_page">
        <div id="Payment_page_container">
          <div id="Payment_gif">
            <img src={Animation_payment2} />
          </div>
          <div id="Payment_success_content">
            <div id="Thank_you">
              <h1>Thank You!😊 </h1>
              <p>Your payment has been successfully processed.</p>
            </div>
            <div id="payment_success_msg">
              <p >
                You will be redirected to the home page shortly or click here to
                home page
              </p>
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
