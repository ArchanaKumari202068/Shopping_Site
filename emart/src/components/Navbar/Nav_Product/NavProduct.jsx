import { React, useState, useEffect } from "react";
import axios from "axios";
import ProductCards from "../../Products/ProductCards";
import "./NavProduct.css";
import FadeLoader from "react-spinners/FadeLoader";
const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

const NavProduct = (props) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalProducts, settotalProducts] = useState();

  const fetchProducts = async () => {
    setLoading(true);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products?limit=10&skip=${
        page * 10 - 10

      }&search=${props.search}`
    );
    setLoading(false);

    console.log("fetch data in the product page", res);
    // if (res.data ){
    settotalProducts(res.data.totalProducts);
    setTotalPage(res.data.totalPages);
    setProducts(res.data.ProductData);
    // }
  };
  console.log("products in the product page", products);

  useEffect(() => {
    fetchProducts();
    // document.querySelector(".ProductPaginationPage").scrollIntoView()
  }, [page,props.search]);

  return (
    <div className="ProductPaginationPage">
      {/* {props.search} */}
      <h2>Total Products:{totalProducts}</h2>
      <FadeLoader
        color="#0084d6"
        loading={loading}
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "100",
        }}
      />
      {products.length > 0 && (
        <div className="products">
          {products.map((product) => {
            return (
              <div className="Products_pagination">
                <ProductCards
                  id={product._id}
                  product_img={product.product_img}
                  products_titles={product.product_details_title}
                  category={product.product_categories}
                  price={product.product_price}
                  rating={product.product_Avgrating}
                />
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => setPage(page - 1)}>⬅️</span>
          {range(totalPage).map((val) => {
            return (
              <span
                className={`pagination_btn ${page == val + 1 ? "active" : ""}`}
                onClick={() => setPage(val + 1)}
              >
                {val + 1}
              </span>
            );
          })}

          <span onClick={() => setPage(page + 1)}>➡️</span>
        </div>
      )}
    </div>
    // <div>
    //   {products.length > 0 && <div className="products">(
    //     <div>
    //       <ProductCards
    //         id={product._id}
    //         product_img={product.product_img}
    //         products_titles={product.product_details_title}
    //         category={product.product_categories}
    //         price={product.product_price}
    //         rating={product.product_Avgrating}
    //       />
    //     </div>
    //   )}
    // </div>
  );
};

export default NavProduct;
