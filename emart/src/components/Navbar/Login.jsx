import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { contextCreated } from "../useContext/Context";
import Login_img from "../assest/Login_img.jpg";
// import { contextCreated } from "../useContext/Context";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const a = useContext(contextCreated);
  const handleLogIn = async () => {
    // console.log(email);
    // console.log(password)
    // useEffect( ()=>{w
    try {
      console.log("check1");
      const login = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        Email: email,
        Password: password,
      });
      console.log(login.data.logintoken);
      localStorage.setItem("jwt", login.data.logintoken);

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Do not have account SignUp");
    }

    // },[])
  };

  return (
    <div className="main_login_page">
      <div id="Login_img">
        <img src={Login_img} />
      </div>
      <div id="Login_form_container">
        <h1>LogIn</h1>
        <div className="login_container">
          <input
            id="username"
            placeholder="Email"
            value={email}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            id="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div id="login_buttons">
            <button id="btn_login" onClick={handleLogIn}>
              Log In
            </button>
            <div id="Forget_password_btn">
              <div id="Remember_password">
              <input type="checkbox" id="Remember_me" />
                <label for="Remember_me">
                  Remember me
                  
                </label>
                
              </div>
              <p>Forget Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
