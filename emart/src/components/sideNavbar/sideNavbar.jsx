import React from "react";
import { Link } from "react-router-dom";
import "./sideNavbar.css";
import ProductCards from "../Products/ProductCards";
const SideNavbar = (props) => {
  return (
    <div id="SideNavbar">
      {/* <h1>Women</h1> */}
      <div id="sidebar-search">
        <input placeholder="Search products" type="text" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            height="1em"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div id="filterByPrice">
        <h2>Filter By Price</h2>
        <div id="priceRangeSlider"></div>
        <div id="priceSliderWrapper">
          <button>FILTER</button>
          <p>Price:$40-$290</p>
        </div>
      </div>
      <div id="Categories">
        <h2>Categories</h2>
        <ul>
          <li>
            <Link>Accessories</Link>
            <p>(7)</p>
          </li>
          <li>
            <Link>Men</Link>
            <p>(14)</p>
          </li>
          <li>
            <Link>Women</Link>
            <p>(17)</p>
          </li>
        </ul>
      </div>
      <div id="bestSeller">
        <h2>Our Best Sellers</h2>
        <div id="bestSellerProducts">
          <ul>
            <li>
            <ProductCards
                  id={props._id}
                  product_img={props.product_img}
                  products_titles={props.product_details_title}
                  category={props.product_categories}
                  price={props.product_price}
                />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
