import React from "react";
import styles from './css_modules/LandingPage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";

import Footer from "../../page_components/customer/Footer";

import AdDisplay from "../../page_components/customer/AdDisplay";
import FeaturedRestaurant from "../../page_components/customer/FeturedRestaurants";
import FeaturedRestaurants from "../../page_components/customer/FeturedRestaurants";

const LandingPage = props => {

    return(
        <div className={styles.container}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <AdDisplay/>
            <FeaturedRestaurants  restaurants={props.restaurants}/>
            <Footer/>
            

        </div>
    )
  }
  
  export default LandingPage; 