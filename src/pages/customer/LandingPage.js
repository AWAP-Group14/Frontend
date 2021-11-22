import React from "react";
import styles from './css_modules/LandingPage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import AdDisplay from "../../page_components/customer/AdDisplay";
import FeaturedRestaurant from "../../page_components/customer/FeturedRestaurants";
import FeaturedRestaurants from "../../page_components/customer/FeturedRestaurants";
// import Footer

const LandingPage = props => {
    return(
        <div className={styles.container}>
            <NavigationBar/>
            <AdDisplay/>
            <FeaturedRestaurants/>
            
        </div>
    )
  }
  
  export default LandingPage; 