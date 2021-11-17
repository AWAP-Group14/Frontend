import React from "react";
import styles from './css_modules/BrowsePage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import RestaurantCard from '../../page_components/customer/RestaurantCard';

const BrowsePage = props => {
    return(
        <div className={styles.container}>
            <NavigationBar/>
            <RestaurantCard/>
        </div>
    )
  }
  
  export default BrowsePage; 