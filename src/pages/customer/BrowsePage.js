import React from "react";
import styles from './css_modules/BrowsePage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import RestaurantCard from '../../page_components/customer/RestaurantCard';


export default function BrowsePage(props) {


  
  return (
    <div>
      <div className={ styles.container }>
        <NavigationBar/>
      {
        props.restaurants.map(restaurant => <RestaurantCard key={restaurant.id} {...restaurant} />)
      }
      </div>
    </div>
  )
}
