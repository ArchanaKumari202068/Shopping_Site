import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import Product2Img from "../assest/sports-shoe1-400x400.jpg";
import Product3Img from "../assest/product-accessory2-400x400.jpg";
import Product4Img from "../assest/product-bag1-400x400.jpg";
import ProductCards from "../Products/ProductCards";
import axios from "axios";
import {useParams} from 'react-router-dom'
const ProductDetailscommon = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/ProductDetails/${id}`)
      .then((res) => setProduct(res.data));
  }, []);
  // const parameters = useParams();
  console.log(id)

  return (
    <>
      <div className="Product_details_main_page">
        <div className="Product_details_img">
          <img src={props.Product_img} />
        </div>
        <div className="Product_details_content">
          <div className="product_nav">
            <a>
              <li>Home/</li>
            </a>
            <a>
              <li>{product.product_categories}/</li>
            </a>
            <a>
              <li>{product.product_details_title}</li>
            </a>
          </div>

          <div className="Product_details_content">
            <h1>{product.product_details_title}</h1>
            <p>
              <span>{product.product_price}</span>+ Free Shipping
            </p>
            <p>{product.product_about}</p>
            <div className="Product_details_btn">
              <button className="quntity">{product.product_quantity}</button>
              <button className="cart_btn">ADD TO CART</button>
            </div>
            <p>
              Categories: <a>{product.product_categories}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="product-desc">
        <h3>Product description</h3>
        <div className="product_description">
          <p>{product.product_about}</p>
        </div>
      </div>
      <div className="related_product_container">
        <h1>Related products</h1>
        <div className="related_product">
          <div className="Products_details">
            <ProductCards
              Product_img={Product2Img}
              products_titles="Shoe"
              category="men"
              price="$300"
            />
          </div>
          <div className="Products_details">
            <ProductCards
              Product_img={Product3Img}
              products_titles="Anchor Bracelet"
              category="Women"
              price="$200"
            />
          </div>
          <div className="Products_details">
            <ProductCards
              Product_img={Product4Img}
              products_titles="Light Brown Purse"
              category="Women"
              price="$250"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailscommon;
