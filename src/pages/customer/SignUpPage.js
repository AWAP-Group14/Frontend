import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/SignUpPage.module.css';
import axios from 'axios';

export default function SignUpPage(props) {

  return (
    <div>
      <NavigationBar/>
      <form className={styles.form}>
        <div>
          <label>Firstname</label>
          <input></input>
        </div>
        <div>
          <label>Lastname</label>
          <input></input>
        </div>
        <div>
          <label>Adress</label>
          <input></input>
        </div>
        <div>
          <label>Phone</label>
          <input></input>
        </div>
        <div>
          <label>email</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <button>Create account</button>
      </form>
      <Footer />
    </div>
  );
}
