import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/SignUpPage.module.css';
import axios from 'axios';
import PageFiller from "../../page_components/shared/PageFiller";

export default function SignUpPage(props) {

  const [SignupProcessState, setProcessState] = useState("idle");

  const [state, setState] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      password: ""
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
    axios.post('https://voulutora-backend.herokuapp.com/customer/signup', {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        phone: state.phone,
        address: state.address,
        password: state.password
      })
    .then(response => {
      console.log(response);
      setProcessState("signupSuccess")
      setTimeout(() => {
        window.location.replace("/login")
      },1500)
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
      signupControls = <span style={{color: "red"}}>Email already in use</span>
      break;

    case "signupFailed":
      signupControls = <span style={{color: "red"}}>Fill all the columns</span>
      break;
  }

  return (
    <div>
      <NavigationBar/>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Lastname</label>
          <input
            type="text"
            name="lastname"
            value={state.lastname}
            onChange={handleInputChange}
          />
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
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={state.phone}
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
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create account</button>
        {signupControls}
      </form>
      <PageFiller/>
      <Footer />
    </div>
  );
}
