import React, { useState, useEffect, useContext } from "react";
import "./reviews.css";
import { contextCreated } from "../../useContext/Context";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardReviews from "./CardReviews.jsx";
const Reviews = () => {
  const [getAllReviews, setgetAllReviews] = useState([]);
  const userId = useContext(contextCreated);
  const [Rating, setRating] = useState();
  const [Reviews, setReviews] = useState();
  const { id } = useParams();
  const getReviewsOfProduct = async () => {
    const getReviews = await axios.get(`http://localhost:5000/reviews/${id}`);
    console.log("getReviews of the product", getReviews);
    setgetAllReviews(getReviews.data);
  };
  const handleSubmitReviews = () => {
    console.log(Rating);
    console.log(Reviews);
    console.log(userId.user);
    console.log(id);

    const postReviews = async () => {
      try {
        const postReviewOfProduct = await axios.post(
          "http://localhost:5000/reviews",
          {
            product_id: id,
            user_id: userId.user,
            reviews: Reviews,
            rating: Rating,
            postedOn: new Date(),
          }
        );
        getReviewsOfProduct();
        console.log("Reviews data posted", postReviewOfProduct);
      } catch (error) {
        console.log(error, "error in posting the date");
      }
    };
    postReviews();
  };
  useEffect(() => {
    try {
      getReviewsOfProduct();
      // postReviews()
    } catch (err) {
      console.log("Error in posting the Reviews");
    }
  }, []);
  return (
    <div id="Reviews_page">
      {getAllReviews.length == 0 ? (
        <p>There are no reviews yet.</p>
      ) : (
        <div id="get_reviews">
          {getAllReviews.map((ele) => {
            return (
              <CardReviews
                userName="Archana"
                rating={ele.rating}
                reviews={ele.reviews}
                reviews_posted_date={ele.postedOn}
              />
            );
          })}
        </div>
      )}

      <div id="main_container">
        <div id="review_form">
          <div id="review_header">
            <h3> Be the first to review “DNK Blue Shoes”</h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div id="your_rating">
            <label for="rating">Your_rating *</label>
            <select
              id="rating"
              onChange={(event) => {
                setRating(event.target.value);
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div id="Your_reviews">
            <label>Your review * </label>
            <textarea
              onChange={(event) => {
                setReviews(event.target.value);
              }}
            ></textarea>
          </div>
          <div id="Submit_review">
            <button onClick={handleSubmitReviews}>Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
