import React, { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/RegistrationForm.module.css';
import axios from 'axios';

export default function RegistrationForm(props) {

  const uploadImage = (files) => {
    console.log(files[0])
  }

  return (
    <div>
      <NavigationBar/>
      <form className={styles.form}>
        <div>
          <label>Restaurant name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Contact email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div>
          <label>Type of restaurant</label>
          <input></input>
        </div>
        <div>
          <label>Opening hours</label>
          <input type="number"></input>
        </div>
        <div>
          <label>Image</label>
          <input type="file" onChange={(event) => {
            uploadImage(event.target.files)
          }}></input>
        </div>
        <div>
          <label>Price range</label>
          <input></input>
        </div>
        <div>
          <label>Address</label>
          <input type="address" ></input>
        </div>
        <button>Create account</button>
      </form>
      <Footer />
    </div>
  );
}