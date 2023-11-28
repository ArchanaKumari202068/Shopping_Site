import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";
import Login from "./components/Navbar/Login";
import Register from "./components/Navbar/Register";
import Cart from "./components/cart/Cart";
import "./App.css";
import Men from "./components/Navbar/Men/Men";
import Women from "./components/Navbar/Women/Women";
import axios from "axios";
import { useContext, useEffect } from "react";
import { contextCreated } from "./components/useContext/Context";
import ShippingForm from "./components/Order/Shipping_page";
import PaymentSuccessful from "./components/cart/payment/PaymentSuccessful";

function App() {
  const location = useLocation();
  const user_id = useContext(contextCreated);

  const authenticateUSer = async () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      try {
        const sendToken = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/auth`,
          {
            token: localStorage.getItem("jwt"),
          }
        );
        console.log(sendToken.data.id);
        user_id.setUser(sendToken.data.id);
        console.log(user_id.setUser(sendToken.data.id));
      } catch (error) {
        console.log("error in authentication", error);
      }
    }
  };
  useEffect(() => {
    authenticateUSer();
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/product/:id/" element={<ProductsDetails />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<ShippingForm />} />
        <Route path="/payment_successfull" element={<PaymentSuccessful />} />

      </Routes>
      <Footer />
    </>

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
