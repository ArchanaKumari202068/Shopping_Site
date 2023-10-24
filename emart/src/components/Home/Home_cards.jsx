import React from "react";
import Home_container from "./Home_container";
import card1_img from "../assest/women-fashion-free-img.jpg";
import card2_img from "../assest/men-fashion-free-img.jpg";
import card3_img from "../assest/footwear-free-img.jpg";

const Home_cards = () => {
  return (
    <div className="Home_container">
      <Home_container
        title="20% Off On Tank Tops"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
        card_img={card1_img}
        button="SHOP NOW"
      />
      <Home_container
        title="title1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
        card_img={card2_img}
        button="SHOP NOW"
      />
      <Home_container
        title="title1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. "
        card_img={card3_img}
        button="CHECK OUT"
        
      />
    </div>
  );
};

export default Home_cards;
