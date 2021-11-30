import React from "react";
import styles from './css_modules/RestaurantCard.module.css';

export default function RestaurantCard(props)
{
    let price;

    if (props.restaurant_price_level == 1) {
        price = "€"
    }

    if (props.restaurant_price_level == 2) {
        price = "€€"
    }

    if (props.restaurant_price_level == 3) {
        price = "€€€"
    }

    if (props.restaurant_price_level == 4) {
        price = "€€€€"
    }
        
        return (

            <div className={styles.restCardContainer}>
                <img src={props.restaurant_image} className={styles.image}></img>
                <p>{props.restaurant_name}</p>
                <p>{props.restaurant_type}</p>
                <p>{price}</p>
                <p>Delivery: free!</p>
            </div>
        )
    

}
