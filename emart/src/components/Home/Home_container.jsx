import React from "react";
import "./Home_container.css";
const Home_container = (props) => {
  return (
    <div className="Card">
      <img src={props.card_img} className="Home_Card_img" />
      <div className="card_content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button className="card_content_btn">{props.button}</button>
      </div>
    </div>
  );
};

export default Home_container;
