import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { contextCreated } from "../useContext/Context";
const Navbar1 = () => {
  const userContext = useContext(contextCreated);
  console.log(userContext);
  const [bars, setBars] = useState(false);
  // const [login,setLogin] = useState(false)
  const handleOnClick = () => {
    setBars(!bars);
  };

  return (
    <>
      <nav>
        <div className="Navbar_main_container">
          <div className="bars" onClick={handleOnClick}>
            <i className="fa fa-bars"></i>
          </div>
          <div
            className={`menulink ${bars ? "show" : ""}`}
            onClick={handleOnClick}
            id="nav-menu"
          >
            <div className={`mobile`}>
              <i className="fa fa-multiply"></i>
            </div>

            <ul>
              <li id="brand_titile">AK COLLECTION</li>
            </ul>
            <div className="Menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li>
                  <Link to="/">Women</Link>
                </li>
                <li>
                  <Link to="/">Men</Link>
                </li>
              </ul>
            </div>
            <div id="search_icon">
              <input id="search_input" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="search_bar"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="buttons_nav">
              {userContext.user ? (
                <button>
                  <i className="fa fa-shopping-cart"></i>Cart 0
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button>
                      <i className="fa fa-sign-in "></i>LogIn
                    </button>
                  </Link>
                  <Link to="/register">
                    <button>
                      <i className="fa fa-user-plus"></i>Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
