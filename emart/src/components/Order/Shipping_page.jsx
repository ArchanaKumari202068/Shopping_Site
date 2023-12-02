import React, { useState,useContext } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Global_delivery from "../assest/Global_delivery.gif";
import "./shipping.css";
import axios from "axios";
import { contextCreated } from "../useContext/Context";
const countries = [
  "Select Country",
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "India",
  "Australia",
];

const states = [
  "Select State",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const ShippingForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
 

  const [formData, setFormData] = useState({
    name: "",
    country: "Select Country",
    streetAddress: "",
    townCity: "",
    states: "",
    pincode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    country: "",
    streetAddress: "",
    townCity: "",
    states: "",
    pincode: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };
  const validateEmail = () => {
    //condition for valid email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setFormErrors({...formErrors,email:"Please enter an email address"});
    } else if (!email.match(emailPattern)) {
      setFormErrors("Please enter a valid email address.");
    } else {
      setFormErrors("");
    }
  };
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   setEmailError(""); // Reset error when user edits email
  // };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Example validation (you can add more complex validation logic)
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.country === "Select Country") {
      newErrors.country = "Please select a country";
      isValid = false;
    }

    if (formData.streetAddress.trim() === "") {
      newErrors.streetAddress = "Street Address is required";
      isValid = false;
    }

    if (formData.townCity.trim() === "") {
      newErrors.townCity = "Town/City is required";
      isValid = false;
    }

    if (formData.states.trim() === "") {
      newErrors.states = "State is required";
      isValid = false;
    }

    if (formData.pincode?.trim() === "") {
      newErrors.pincode = "Pincode is required";
      isValid = false;
    }

    if (formData.phone?.trim() === "") {
      newErrors.phone = "Phone is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

 
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setFormErrors(""); // Reset error when user edits password
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    validateForm()
   
    //Onsubmit console email and password
    console.log(email);
    console.log(password);
  };

  const checkUser = useContext(contextCreated);

  const handlecheckout = async () => {
    try {
      console.log(checkUser.user)
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/create-checkout-session/`,
        {
          id: checkUser.user,
        }
      );
      console.log(res.data.url);
      window.location.replace(res.data.url);
      //  navigate(res.data.url)
    } catch (error) {
      console.log(error);
    }
  };
// 
  return (
    <>
      <div className="main_shipping_page">
        <div className="shipping_img">
          <img src={Global_delivery} />
        </div>
        <div className="shipping_part">
          <form onSubmit={handleSubmit}>
            <div className="shipping_form">
              <h1>Shipping</h1>
              
                <input
                  type="text"
                  name="name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                />    
                   {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}       
                <input
                  type="text"
                  placeholder="Email "
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                  />
                  {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
              
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formErrors.country && <p style={{ color: "red" }}>{formErrors.country}</p>}

              {/* state */}
              <select
                name="states"
                value={formData.states}
                onChange={handleInputChange}
              >
                {states.map((states, index) => (
                  <option key={index} value={states}>
                    {states}
                  </option>
                ))}
              </select>
              {formErrors.states && <p style={{ color: "red" }}>{formErrors.states}</p>}

              
              <input
                type="text"
                name="townCity"
                placeholder="City Name"
                value={formData.townCity}
                onChange={handleInputChange}
              />
              {formErrors.townCity && <p style={{ color: "red" }}>{formErrors.townCity}</p>}
            

              
              <input
                type="text"
                name="streetAddress"
                placeholder="Address1 for shipping"
                value={formData.streetAddress}
                onChange={handleInputChange}
              />
               {formErrors.streetAddress && <p style={{ color: "red" }}>{formErrors.streetAddress}</p>}
              
              
              <input
                type="text"
                name="streetAddress"
                placeholder="Address2 for shipping"
                value={formData.streetAddress}
                onChange={handleInputChange}
              />
               {formErrors.streetAddress && <p style={{ color: "red" }}>{formErrors.streetAddress}</p>}
               
              <input
                type="Number"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
               {formErrors.pincode && <p style={{ color: "red" }}>{formErrors.pincode}</p>}
    
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
              />
               {formErrors.phone && <p style={{ color: "red" }}>{formErrors.phone}</p>}
            
              <button type="submit" className="shipping-btn" onClick={handlecheckout}>
                Shipping
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;

// const ShippingForm = ()=>{
//   return <h1>Hello</h1>

// }

// export default ShippingForm;
