import React from "react";
import styles from './css_modules/RestaurantCard.module.css';

export default function RestaurantCard(props)
{
    return (
        <div className={styles.restCardContainer}>
            <img className={styles.image}></img>
            <p>{props.restaurants.restaurant_name}</p>
            <p>{props.restaurants.restaurant_type}</p>
            <p>{props.restaurants.restaurant_price_level}</p>
            <p>Delivery free!</p>
        </div>
    )
}