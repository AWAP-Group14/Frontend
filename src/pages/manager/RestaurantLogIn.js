import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/RestaurantLogIn.module.css';
import axios from 'axios';

export default function RestaurantLogIn(props) {
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
          axios.post('https://voulutora-backend.herokuapp.com/customer/login', {}, {
            auth: {
              username: state.email,
              password: state.password
            }
          })
          .then(response => {
            console.log(response);
          })
          .catch(err => console.log(err));
        };

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
        
      </form>
      <div className={styles.SuggestionContainer}>
          <p>Do not have account yet?</p>
          <button>Create account</button>
        </div>
      <Footer />
    </div>
  );
}