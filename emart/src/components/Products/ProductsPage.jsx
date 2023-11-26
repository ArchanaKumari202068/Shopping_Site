import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Products/Products.css";
// import ProductImg from "../assest/product-w-jeans2-400x400.jpg";
// import Product2Img from "../assest/sports-shoe1-400x400.jpg";
// import Product3Img from "../assest/product-accessory2-400x400.jpg";
// import Product4Img from "../assest/product-bag1-400x400.jpg";
// import Product5Img from "../assest/product-accessory1-400x400.jpg";
import ProductCards from "../Products/ProductCards";
import Features from "./Features";
import tagfreeimg from "../assest/tag-free-img.png";
import qualityfreeimg from "../assest/quality-free-img.png";
import lockfreeimg from "../assest/lock-free-img.png";
import globefreeimg from "../assest/globe-free-img.png";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/ProductDetails").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <div className="Main_ProductPage">
        <div className="Products_page_title">
          <h1>Featured Products</h1>

          {/* <p></p> */}
        </div>
        <div></div>
        <div className="Project_details_cards">
          {products.map((product) => {
            return (
              <div className="Products_details">
                <ProductCards
                  id={product._id}
                  product_img={product.product_img}
                  products_titles={product.product_details_title}
                  category={product.product_categories}
                  price={product.product_price}
                  rating ={product.product_Avgrating}
                />
              </div>
            );
          })}
        </div>

        <div className="Product_img_1">
          <div className="Limited_Time_Offer">
            <h4>Limited Time Offer</h4>
            <h2> Special Edition</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h4>Buy This T-shirt At 20% Discount, Use Code OFF20</h4>
            <button className="SHOP_NOW">SHOP NOW</button>
          </div>
        </div>

        <div className="features">
          <Features
            Features_img={tagfreeimg}
            Features_title="Worldwide Shipping"
            Features_para="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <Features
            Features_img={qualityfreeimg}
            Features_title="Best Quality"
            Features_para="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <Features
            Features_img={lockfreeimg}
            Features_title="Best Offers"
            Features_para="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <Features
            Features_img={globefreeimg}
            Features_title="Secure Payments"
            Features_para="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
        </div>
      </div>
      <div className="heading_sale">
        <h3>
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </h3>
      </div>
    </>
  );
};

export default ProductsPage;
