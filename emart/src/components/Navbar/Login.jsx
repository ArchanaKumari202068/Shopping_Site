import React, { useState, useContext } from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css";
import axios from "axios";
import { contextCreated } from "../useContext/Context";
// import { contextCreated } from "../useContext/Context";

const Login = () => {
  const navigate =useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const a = useContext(contextCreated);
  const handleLogIn = async () => {
    // console.log(email);
    // console.log(password)
    // useEffect( ()=>{w
    try {
      console.log("check1");
      const login = await axios.post("http://localhost:5000/login", {
        Email: email,
        Password: password,
      });
      console.log(login.data.logintoken)
       localStorage.setItem("jwt",login.data.logintoken)
      



      
      navigate("/")
    } catch (err) {
      console.log(err);
      alert("Do not have account SignUp");
    }
    
    // },[])
  };
  

  return (
    <div className="main_login_page">
      <h1>LogIn</h1>
      <div className="login_container">
        <input
          id="username"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          id="Password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Forget Password</button>
        <button onClick={handleLogIn}>Log In</button>
      </div>
    </div>
    // localstorage.setItem("username",username)
  );
};

export default Login;
