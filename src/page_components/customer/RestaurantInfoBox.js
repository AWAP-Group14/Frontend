import React from "react";
import styles from './css_modules/RestaurantInfoBox.module.scss'


export default function RestaurantInfoBox(props) 
{


    return(        
        <div className="">
            <h2>{props.restaurantInfo.name}</h2>
            <p>Restaurant type: {props.restaurantInfo.type}</p>
            <div>
            <p>Operating hours:</p>
            {
            props.restaurantInfo.operating_hours.map((line) => 
            <p className="ms-2">{line}</p>
            )}
            </div>
            <p>{props.restaurantInfo.address}</p>
            <p>{props.restaurantInfo.email}</p>
        </div>
    )
  }
  

 