import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import styles from './css_modules/LandingPageManager.module.css';

const LandingPageManager = props => {
    return(
        <div className={styles.App}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <p>Hi, I am landing page for the manager!</p>
        </div>
    )
  }
  
  export default LandingPageManager;