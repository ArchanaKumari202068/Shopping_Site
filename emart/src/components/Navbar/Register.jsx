import React from "react";
import './Register.css'
const Register = () => {
  return (
    <>
      <div className="main_Sign_Up_page">
        <div className="sign_up_heading">
          <h1>Sign Up</h1>
        </div>
        <div className="Sign_Up_content">
          <input placeholder="Name" />
          <input placeholder="Phone No" />
          <input placeholder="Email" />
          <input placeholder="Password" />
        </div>
       <div className="SignUp_button">
        <button>SignUP</button>
       </div>
      </div>
    </>
  );
};

export default Register;
