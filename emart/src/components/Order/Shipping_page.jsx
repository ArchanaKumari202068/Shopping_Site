import React, { useState } from "react";
import "./shipping.css";

const countries = [
  "Select Country",
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "India",
  "Australia",
  // Add more countries as needed
];

const ShippingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Select Country",
    streetAddress: "",
    townCity: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    state: "",
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Example validation (you can add more complex validation logic)
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
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

    if (formData.state.trim() === "") {
      newErrors.state = "State is required";
      isValid = false;
    }

    if (formData.pincode.trim() === "") {
      newErrors.pincode = "Pincode is required";
      isValid = false;
    }

    if (formData.phone.trim() === "") {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process form data if the form is valid
      console.log("Form submitted with data:", formData);
    } else {
      alert("Form has validation errors. Please correct them or make sure each field is filled");
    }
  };

  return (
    <form className="shipping_form" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.firstName}</span>
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.lastName}</span>
      </label>
      <br />
      <label>
        Country:
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
        <span className="error">{formErrors.country}</span>
      </label>
      <br />
      <label>
        Street Address:
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.streetAddress}</span>
      </label>
      <br />
      <label>
        Town/City:
        <input
          type="text"
          name="townCity"
          value={formData.townCity}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.townCity}</span>
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.state}</span>
      </label>
      <br />
      <label>
        Pincode:
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.pincode}</span>
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.phone}</span>
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          
        />
        <span className="error">{formErrors.email}</span>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShippingForm;
