import React from "react";

import styles from './css_modules/NavigationBar.module.css'

const NavigationBar = props => {
    return(
        <div className={styles.navigationBar}>
            <div className={styles.navigationBarHeader}>Volutora</div>
            <div className={styles.navigationBarUserAccount}>
                <div><button className={styles.navigationBarButton}>Sign In</button></div>
                <div><button className={styles.navigationBarButton}>Sign Up</button></div>
            </div>
        </div>
    )
  }
  
  export default NavigationBar; 