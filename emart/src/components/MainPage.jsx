import React from "react";
// import Navbar1 from "./Navbar/Navbar1";
import Home from "./Home/Home";
import Home_cards from "./Home/Home_cards";

// import ProductCards from './Products/ProductCards';
import ProductsPage from "./Products/ProductsPage";
// import Features from './Products/Features';
const MainPage = () => {
  return (
    <>
      {/* <Navbar1 /> */}
      <Home />
      <Home_cards />
      <ProductsPage />
     
      {/* <Features /> */}
      {/* <ProductCards /> */}
    </>
  );
};

export default MainPage;
