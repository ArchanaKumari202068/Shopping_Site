import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { contextCreated } from "../useContext/Context";
import navLogo from "../assest/logo@2x-free-img.png";
const Navbar = () => {
  const navigate = useNavigate();
  const userContext = useContext(contextCreated);
  console.log(userContext);
  const [bars, setBars] = useState(false);
  const handleGetCartdata = () => {
    navigate("/cart");
  };
  const handleRemoveToken = () => {
    try {
      const removeToken = localStorage.removeItem("jwtToken");
      console.log(removeToken);
      userContext.setUser(null);
    } catch (error) {
      console.log("error in signout");
    }
  };
  const handlemenuBar = () => [setBars(!bars)];
  return (
    <>
      <div id="Navbar_main_container">
        <div id="Mobile_view">
          {bars ? (
            <div id="bars" onClick={handlemenuBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          ) : (
            <div id="x_icons" onClick={handlemenuBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          <div id="nav_contact_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>

        <div
          id="nav_menu_container"
          className={`nav_menu_container ${!bars ? "show" : ""}`}
        >
          <div id="img_logo">
            <img src={navLogo} />
          </div>
          <div id="nav_items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/">Products</Link>
              </li> */}
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              {/* <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li> */}
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
              <>
                <button onClick={handleGetCartdata}>
                  <i className="fa fa-shopping-cart"></i>Cart 0
                </button>
                <button  onClick={handleRemoveToken }>
                  <div id="btn_SignOut" >
                  <i className="fa fa-user-plus" ></i>SignOut
                  </div>
                </button>
              </>
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
    </>
  );
};

export default Navbar;
