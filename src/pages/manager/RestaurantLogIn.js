import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/RestaurantLogIn.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import PageFiller from "../../page_components/shared/PageFiller";

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
            setProcessState("loginSuccess")
            console.log(response);
            const receivedJwt = response.data.token;
            props.login(receivedJwt);
            setTimeout(() => {
            window.location.replace("/")
            },1500)
          })
          .catch(err => {
          if (err) {

            console.log(err);

            if (err.response.status == 401) {
              console.log(err.response.status)
            setProcessState("loginFailed")
            } 
          }
          });
        };

        let loginControls = null;
  switch (loginProcessState) {
    case "idle":
      loginControls = null;
      break;
    
    case "loginSuccess":
      loginControls = <span style={{color: "green"}}>Login successfull Redirecting...</span>
      break;
    
    case "loginFailed":
      loginControls = <span style={{color: "red"}}>Wrong email or password</span>
      break;
  }

  return (
    <div>
      <NavigationBar/>
      <div className={styles.bgContainer}>
      
        
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
        
        {loginControls}
      </form>
      <div className={styles.SuggestionContainer}>
          <p>Are you a new restaurant?</p> 
          <Link to="/manager/signup"><button>Create restaurant account</button></Link>
        </div>
        </div>
      <Footer />
    </div>
  );
}