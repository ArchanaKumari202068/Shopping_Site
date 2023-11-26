import React from "react";
import "./Footer.css";
import FooterLogoimg from "../assest/logo@2x-free-img.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="about">
          <img src={FooterLogoimg} />
          <h3>The best look anytime, anywhere.</h3>
        </div>
        <div id="for_her_him_both">
        <div className="For_her for_both">
          <h2>For Her</h2>
          <ul>
            <li>
              <a>Women Jeans</a>
            </li>
            <li>
              <a>Tops and Shirts</a>
            </li>
            <li>
              <a>Women Jackets</a>
            </li>
            <li>
              <a>Heels and Flats</a>
            </li>
            <li>
              <a>Women Accessories</a>
            </li>
          </ul>
        </div>
        <div className="For_Him for_both">
          <h2>For Him</h2>
          <ul>
            <li>
              <a>Men Jeans</a>
            </li>
            <li>
              <a>Men Shirts</a>
            </li>
            <li>
              <a>Men Shoes</a>
            </li>
            <li>
              <a>Men Accessories</a>
            </li>
            <li>
              <a>Men Jackets</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="Subscribe">
          <h2>Subscribe</h2>
          <input placeholder="Your email address.." type="email" />
          <button className="Subscribe_btn">SUBSCRIBE</button>
        </div>
      </div>
      <div className="Footer_copywrite">
        <div className="Copyright">
          <p> Copyright © 2023 Archana</p>
        </div>
        <div className="footer_icons">
          <i class="fa fa-linkedin"></i>
          <i class="fa fa-github"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
