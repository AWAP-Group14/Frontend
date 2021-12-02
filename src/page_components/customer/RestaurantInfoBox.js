import React from "react";
import styles from './css_modules/RestaurantInfoBox.module.scss'


export default function RestaurantInfoBox(props) 
{


    return(        
        <div className="">
            <h2>{props.restaurantInfo.name}</h2>
            <p>{props.restaurantInfo.type}</p>
            {props.restaurantInfo.operating_hours.map((line) => <p>{line}</p>)}
            <p>{props.restaurantInfo.address}</p>
            <p>{props.restaurantInfo.email}</p>
        </div>
    )
  }
  

 