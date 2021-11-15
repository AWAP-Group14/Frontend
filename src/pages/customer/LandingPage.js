import React from "react";
import styles from './css_modules/LandingPage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";

const LandingPage = props => {
    return(
        <div className={styles.container}>
            <NavigationBar/>
            <p>Hi, I am landing page!</p>
        </div>
    )
  }
  
  export default LandingPage; 