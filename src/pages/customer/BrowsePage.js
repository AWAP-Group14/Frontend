import React from "react";
import styles from './css_modules/BrowsePage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import RestaurantCard from '../../page_components/customer/RestaurantCard';
import Footer from '../../page_components/customer/Footer';

const BrowsePage = props => {
    return(
        <div className={styles.container}>
            <NavigationBar/>
            <div className={styles.filterContainer}>
                <p>Restaurants in your area</p>
                <input type="text" placeholder="FILTER"></input>
            </div>
            <div className={styles.RestaurantCard}>
             {
             props.restaurants.map(restaurant => <RestaurantCard key={restaurant.restaurant_name} {...restaurant} /> )
             }
            </div>
            <Footer />
        </div>
    )
  }
  

