import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import styles from './css_modules/LogInPage.module.css';

export default function LogInPage(props) {
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
  };

  return (
    <div>
      <NavigationBar/>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.form}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.form}>
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
