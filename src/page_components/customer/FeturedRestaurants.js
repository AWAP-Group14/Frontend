import React from "react";
import styles from './css_modules/FeaturedRestaurants.module.css';
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

export default function FeaturedRestaurants(props)
{

    // TODO: Feed required props to restaurant cards

    return (
    <div className={styles.root}>
        <div className={styles.headerContainer}>
            <span className={styles.header}>Featured Restaurants</span>
            <Link to="/browse"><button className={styles.seeAllButton}>See all</button></Link>
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