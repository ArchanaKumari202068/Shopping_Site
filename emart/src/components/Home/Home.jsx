import React from "react";
import Home_bg_img from "../assest/home-new-bg-free-img.jpg";
import './Home.css'

const Home = () => {
  return (
    <>
      
      <div className="Img_bg_Home">
        {/* <img src={Home_bg_img} alt="bg_img" className=""/> */}
        <div className="Home_text_container">
          <h1>Raining Offers For Hot Summer!</h1>
          <h3>25% Off On All Products</h3>
          <div className="Home_buttons">
            <button className="shop_buttons">SHOP NOW</button>
            <button className="find_buttons">FIND MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
