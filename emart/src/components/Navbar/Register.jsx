import React, { useState,useContext} from "react";
import {useNavigate} from "react-router-dom"
import "./Register.css";
import axios from "axios";
import { contextCreated } from "../useContext/Context";

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userId = useContext(contextCreated)
 

  const handleSignUpData = () => {
    localStorage.setItem("Name", name);

    console.log(name);
    console.log(email);
    console.log(password);

   async function AuthenticateUser(){
      try {
        const getToken =await axios
        .post("http://localhost:5000/SignUp", {
          Name: name,
          Password: password,
          Email: email,
        })
        // .then( (res) => {
          localStorage.setItem("jwt", getToken.data.token);
          console.log(getToken.data.user_id);
        // });
        console.log(getToken)
        const sendToken = await axios.post("http://localhost:5000/auth", {
          token: localStorage.getItem("jwt"),

        })
        
          console.log(sendToken.data.id)
          console.log(userId.setUser(sendToken.data.id))
         
        
        console.log(sendToken)

      }catch(err){
        console.log(err,"error")

      }
    }
    AuthenticateUser()
    navigate("/")

    // const token =createToken(res.data.user_id)
    
  };
  

  return (
    <>
      <div className="main_Sign_Up_page">
        <div className="sign_up_heading">
          <h1>Sign Up</h1>
        </div>
        <div className="Sign_Up_content">
          <input
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              console.log(name);
            }}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              console.log(email);
            }}
          />
          <input
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              console.log(password);
            }}
          />
        </div>
        <div className="SignUp_button">
          <button onClick={handleSignUpData}>SignUP</button>
        </div>
      </div>
    </>
  );
};

export default Register;
