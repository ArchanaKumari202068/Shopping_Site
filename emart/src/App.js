import Navbar1 from "./components/Navbar/Navbar1";
import MainPage from "./components/MainPage";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";
import Login from "./components/Navbar/Login";
import Register from "./components/Navbar/Register";
import Cart from "./components/cart/Cart";
import "./App.css";
import Context from "./components/useContext/Context";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/product/:id/" element={<ProductsDetails />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Context>
    </BrowserRouter>
    // <>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Main_page/>}></Route>
    // </Routes>
    // </BrowserRouter>
    //   {/* <Navbar /> */}

    //   {/* <Navbar1 />
    //   <Home /> */}
    // </>
  );
}

export default App;
