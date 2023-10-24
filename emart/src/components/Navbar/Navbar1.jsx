import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar1 = () => {
  const [bars,setBars ]= useState(false)
  // const [login,setLogin] = useState(false)
  const handleOnClick = () =>{
    setBars(!bars)
  }


  return (
    <>
      <nav>
        <div className="Navbar_main_container" >
          <div className="bars" onClick={handleOnClick} >
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
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="buttons_nav">
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
            <button>
              <i className="fa fa-shopping-cart"></i>Cart 0
            </button>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
