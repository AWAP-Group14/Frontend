import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/RestaurantLogIn.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function RestaurantLogIn(props) {

        const [loginProcessState, setProcessState] = useState("idle");

        const [state, setState] = useState({
          email: "",
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
          axios.post('https://voulutora-backend.herokuapp.com/manager/login', {}, {
            auth: {
              username: state.email,
              password: state.password
            }
          })
          .then(response => {
            console.log(response.status)
            setProcessState("loginSuccess")
          })
          .catch(err => {
            if (err.response.status == 401) {
              console.log(err.response.status)
            setProcessState("loginFailed")
            }
            
          });
        };

        let signupControls = null;
  switch (loginProcessState) {
    case "idle":
      signupControls = null;
      break;
    
    case "loginSuccess":
      signupControls = <span style={{color: "green"}}>Login successfull</span>
      break;
    
    case "loginFailed":
      signupControls = <span style={{color: "red"}}>Wrong email or password</span>
      break;
  }

  return (
    <div>
      <NavigationBar/>
      <form onSubmit={handleSubmit} className={styles.LogInForm}>
        <div >
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <label></label>
          <button type="submit">Login</button>
        </div>
        
        {signupControls}
      </form>
      <div className={styles.SuggestionContainer}>
          <p>Are you a new restaurant?</p>
          <Link to="/manager/signup"><button>Create restaurant account</button></Link>
        </div>
      <Footer />
    </div>
  );
}