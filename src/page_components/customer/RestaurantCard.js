import React from "react";
import styles from './css_modules/RestaurantCard.module.css';

export default function RestaurantCard(props)
{
    return (
        <div className={styles.restCardContainer}>
            <img className={styles.image}></img>
            <p>Restaurant name{props.restaurant_name}</p>
            <p>Restaurant type{props.restaurant_type}</p>
            <p>€€€{props.restaurant_price_level}</p>
            <p>Delivery free!</p>
        </div>
    )
}