import React, { useEffect, useState } from "react";
import "./Women.css";
import SideNavbar from "../../sideNavbar/sideNavbar.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCards from "../../Products/ProductCards.jsx";

const Women = () => {
  const [womens, setWomens] = useState([]);

  const getProductOfWomen = async () => {
    const getProductByCategories = await axios.get(
      "http://localhost:5000/filter?category=Women"
    );
    console.log(getProductByCategories.data);
    setWomens(getProductByCategories.data);
    console.log("product", womens);
  };
  const getProductByprice = async (e) => {
    const getFilteredProductByPrice = await axios.get(
      `http://localhost:5000/filter?category=Women&sortByPrice=${e.target.value}`
    );
    console.log(getFilteredProductByPrice)
    setWomens(getFilteredProductByPrice.data)
  };

  useEffect(() => {
    getProductOfWomen();
  }, []);
  return (
    <>
      <div id="women">
        <div id="women-sideNavbar">
          <SideNavbar />
        </div>
        <div id="Women-product-header">
          <nav>
            <Link>Home</Link>
          </nav>
          <h1>Women</h1>
          <p>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
            sit amet a augue. Sed non neque elit sed ut.
          </p>
          <div id="filteredResult">
            <p>Showing 1–12 of 17 results</p>
            <div>
              <select onChange={getProductByprice}>
                <option>Default Sorting</option>
                <option value={"pop"}>sort by popularity</option>
                <option value={"lat"}>sort by latest</option>
                <option value={"lat"}>sort by Rating</option>
                <option value={"lowToHigh"}>sort by price: low to high</option>
                <option value={"highToLow"}>sort by price: high to low</option>
              </select>
            </div>
          </div>

          <div id="getAllWomensProduct">
            {womens.map((product) => {
              return (
                // <div id="productDetails">
                <ProductCards
                  id={product._id}
                  product_img={product.product_img}
                  products_titles={product.product_details_title}
                  category={product.product_categories}
                  price={product.product_price}
                />
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;
