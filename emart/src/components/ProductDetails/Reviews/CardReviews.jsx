import React from "react";
import "./CardReviews.css";
const CardReviews = (props) => {
  return (
    <>
      <div id="CardReviews_container">
        <div id="review_container">
          <div id="review_user">
            <p>User Name: {props.userName}</p>
          </div>
          <div id="review_rating">
            <p>Rating: {props.rating}</p>
          </div>
          <div id="reviews_of_product">
            <p>Reviews: {props.reviews}</p>
          </div>
          <div id="posted_date">
            <p>Posted Date: {new Date(props.reviews_posted_date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardReviews;
