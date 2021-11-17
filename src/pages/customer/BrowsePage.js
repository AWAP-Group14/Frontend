import React from "react";
import styles from './css_modules/BrowsePage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import RestaurantCard from '../../page_components/customer/RestaurantCard';

const BrowsePage = props => {
  console.log(props.restaurants);
    return(
      <div>
        <NavigationBar/>
        <RestaurantCard restaurants={props} />
        </div>
        
    )
  }
  
  export default BrowsePage; 