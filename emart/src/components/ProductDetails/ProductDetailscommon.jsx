import React, { useEffect, useState, useContext } from "react";
import "./ProductDetails.css";
import Product2Img from "../assest/sports-shoe1-400x400.jpg";
import Product3Img from "../assest/product-accessory2-400x400.jpg";
import Product4Img from "../assest/product-bag1-400x400.jpg";
import ProductCards from "../Products/ProductCards";
import axios from "axios";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews/Reviews";
import { contextCreated } from "../useContext/Context";
const ProductDetailscommon = (props) => {
  const checkUserLogin = useContext(contextCreated);
  const [product, setProduct] = useState(true);
  const [showContainer, setshowContainer] = useState("description");
  const { id } = useParams();
  const handleAddToCart = async () => {
    if (checkUserLogin.user == null) {
      alert("login or signup");
      console.log(checkUserLogin.user);
    } else {
      try {
        console.log("added to cart");
        const productdata = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/cart/${checkUserLogin.user}`,
          {
            productId: id,
            quantity: 1,
          }
        );
        console.log(productdata);
        alert("Added to cart");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getProductDetailsById = async () => {
    try {
      const productsDetails = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/ProductDetails/${id}`
      );
      console.log("Fecthing Product Details", productsDetails);
      setProduct(productsDetails.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("fetching the products detailsby the is",getProductDetailsById())
  useEffect(() => {
    getProductDetailsById();
  }, []);
  // const parameters = useParams();
  console.log(id);

  return (
    <>
      <div className="Product_details_main_page">
        <div className="Product_details_img">
          <img src={product.product_img} />
        </div>
        <div className="Product_details_content">


         
            <h1>{product.product_details_title}</h1>
            <p>
              <span>{product.product_price}</span>+ Free Shipping
            </p>
            <p>{product.product_about}</p>
            <div className="Product_details_btn">
              <button className="quntity">{product.product_quantity}</button>
              <button onClick={handleAddToCart} className="cart_btn">
                ADD TO CART
              </button>
            </div>
            <p>
              Categories: <a>{product.product_categories}</a>
            </p>
            <p>Rating:{product.product_Avgrating?.toFixed(2)}</p>
          </div>
        </div>
    
      <div className="sub-section">
        <div className="btns_Reviews_description">
          <button
            onClick={() => {
              setshowContainer("description");
            }}
          >
            Descripstion
          </button>
          <button
            onClick={() => {
              setshowContainer("reviews");
            }}
          >
            Reviews
          </button>
        </div>
        {showContainer == "description" ? (
          <div className="product-desc">
            <h3>Product description</h3>
            <div className="product_description">
              <pre>{product.product_about}</pre>
            </div>
          </div>
        ) : (
          <Reviews getProductDetailsById={getProductDetailsById} />
        )}
      </div>

      <div className="related_product_container">
        <h1>Related products</h1>
        <div className="related_product">
          <div className="Products_details">
            <ProductCards
              product_img={Product2Img}
              products_titles="Shoe"
              category="men"
              price="300"
            />
          </div>
          <div className="Products_details">
            <ProductCards
              product_img={Product3Img}
              products_titles="Anchor Bracelet"
              category="Women"
              price="200"
            />
          </div>
          <div className="Products_details">
            <ProductCards
              product_img={Product4Img}
              products_titles="Light Brown Purse"
              category="Women"
              price="250"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailscommon;
