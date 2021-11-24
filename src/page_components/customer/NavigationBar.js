import React from "react";
import { Link } from "react-router-dom";
import styles from './css_modules/NavigationBar.module.css'

const NavigationBar = props => {
    return(
        <div className={styles.navigationBar}>
            <Link to="/"><div className={styles.navigationBarHeader}>Volutora</div></Link>
            <div className={styles.navigationBarUserAccount}>
                <div><Link to="/login"><button className={styles.navigationBarButton}>Sign In</button></Link></div>
                <div><Link to="/signup"><button className={styles.navigationBarButton}>Sign Up</button></Link></div>
            </div>
        </div>
    )
  }
  
  export default NavigationBar;