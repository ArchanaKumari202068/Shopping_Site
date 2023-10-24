import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="main_login_page">
      <h1>LogIn</h1>
      <div className="login_container">
        <input id="username" placeholder="Email" />
        <input id="Password" placeholder="Password" />
        <button>Forget Password</button>
        <button>Log In</button>
      </div>
    </div>
    // localstorage.setItem("username",username)
  );
};

export default Login;
