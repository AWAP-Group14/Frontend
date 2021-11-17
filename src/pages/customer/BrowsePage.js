import React from "react";
import styles from './css_modules/BrowsePage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import RestaurantCard from '../../page_components/customer/RestaurantCard';

export default function BrowsePage(props) {

  const restaurantlist = props.restaurants.map(restaurant => <RestaurantCard key={restaurant.id} {...restaurant} />)
  return (
    <div>
      {
        restaurantlist
      }
      
    </div>
  )
}
