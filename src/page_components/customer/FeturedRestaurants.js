import React from "react";
import styles from './css_modules/FeaturedRestaurants.module.css';
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRestaurants(props)
{

    // TODO: Feed required props to restaurant cards

    return (
    <div className={styles.root}>
        <div className={styles.headerContainer}>
            <span className={styles.header}>Featured Restaurants</span>
            <button className={styles.seeAllButton}>See all</button>
        </div>
        <div className={styles.cardContainer}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            
        </div>
        
    </div>
    )
}