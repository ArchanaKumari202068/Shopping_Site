import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import { contextCreated } from "../useContext/Context";
import SignIn_img from "../assest/SignIn_img.jpg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';
import  { jwtDecode }  from 'jwt-decode'
// import { googleLogout } from '@react-oauth/google';
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userId = useContext(contextCreated);

  const handleSignUpData = () => {
    localStorage.setItem("Name", name);

    console.log(name);
    console.log(email);
    console.log(password);

    async function AuthenticateUser() {
      try {
        const getToken = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/SignUp`,
          {
            Name: name,
            Password: password,
            Email: email,
          }
        );
        // .then( (res) => {
        localStorage.setItem("jwt", getToken.data.token);
        console.log(getToken.data.user_id);
        // });
        console.log(getToken);
        const sendToken = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/auth`,
          {
            token: localStorage.getItem("jwt"),
          }
        );

        console.log(sendToken.data.id);
        console.log(userId.setUser(sendToken.data.id));

        console.log(sendToken);
      } catch (err) {
        console.log(err, "error");
      }
    }
    AuthenticateUser();
    navigate("/");

    // const token =createToken(res.data.user_id)
  };

  return (
    <>
      <div className="main_Sign_Up_page">
        <div id="Sign_in_img">
          <img src={SignIn_img} />
        </div>
        <div className="sign_up_heading">
          <h1>Sign Up</h1>

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
            <button onClick={handleSignUpData}>Create Account</button>
          </div>
          <GoogleOAuthProvider clientId="221793857279-a5hg5dhgd402phb78ufmjc6mb54vbp3c.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={async(credentialResponse) => {
                const details = jwtDecode(credentialResponse.credential);
                console.log(details);
                console.log(credentialResponse);
                try {
                  const getToken = await axios.post(
                    `${process.env.REACT_APP_BACKEND_URL}/SignUp`,
                    {
                      Name: details.name,
                      Email: details.email,
                      IsSignInWithGoogle:true
                    }
                  )
                  console.log(getToken.data.token)
                  localStorage.setItem("jwt", getToken.data.token);
                  navigate('/')
  
                } catch (error) {
                  alert("Email already exist ,please login with your Account ")
                  navigate('/login')
                  console.log("error in login with google",error)
                  
                }


              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </>
  );
};

export default Register;
