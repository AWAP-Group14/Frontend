import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/RegistrationForm.module.css';
import axios from 'axios';

export default function RegistrationForm(props) {

  const [SignupProcessState, setProcessState] = useState("idle");

  const [state, setState] = useState({
      restaurantName: "",
      address: "",
      openingHour: "",
      image:"",
      email: "",
      password: "",
      restaurantType: "",
      priceRange: null
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    axios.post('https://voulutora-backend.herokuapp.com/manager/signup', {
      restaurantName: state.restaurantName,
      address: state.address,
      openingHour: state.openingHour,
      image: state.image,
      email: state.email,
      password: state.password,
      restaurantType: state.restaurantType,
      priceRange: parseInt(state.priceRange)
      })
    .then(response => {
      console.log(response);
      setProcessState("signupSuccess")
    })
    .catch(err => {
      if (err.response.status == 409) {
        console.log(err.response.status)
      setProcessState("emailInUse")
      }

      if (err.response.status == 400) {
        console.log(err.response.status)
      setProcessState("signupFailed")
      }
      
    });
  };

  let signupControls = null;
  switch (SignupProcessState) {
    case "idle":
      signupControls = null;
      break;
    
    case "signupSuccess":
      signupControls = <span style={{color: "green"}}>Signup Sucess</span>
      break;
    
    case "emailInUse":
      signupControls = <span style={{color: "red"}}>Email or restaurant name already in use</span>
      break;

    case "signupFailed":
      signupControls = <span style={{color: "red"}}>Fill all the columns</span>
      break;
  }


  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("image", files[0])
    axios.post('https://voulutora-backend.herokuapp.com/manager/upload', formData
    )
    .then((response) => {
      console.log(response.data)
      state.image = response.data;
    })
    console.log(files[0]);
    
  }

  return (
    <div>
      <NavigationBar/>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Restaurant name</label>
          <input
            type="text"
            name="restaurantName"
            value={state.restaurantName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Operating hours</label>
          <input
            type="text"
            name="openingHour"
            value={state.openingHour}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image</label>
          <input type="file" 
                  name="image"
            onChange={(event) => {
            uploadImage(event.target.files)
          }}></input>
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Restaurant type</label>
          <input
            type="text"
            name="restaurantType"
            value={state.restaurantType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price level</label>
          <input min={1} max={4} value={1}
            type="number"
            name="priceRange"
            value={state.priceRange}
            onChange={handleInputChange}
          />
        </div>
        <label></label>
        <button type="submit">Create account</button>
        {signupControls}
      </form>
      <Footer />
    </div>
  );
}