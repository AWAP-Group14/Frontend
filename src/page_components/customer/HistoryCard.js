import React from "react";

export default function HistoryCard (props)
{
    return (
        <div>
            <img></img>
            <h1>!{props.RestaurantName}</h1>
            <p>!{props.orderId}</p>
            <p>!{props.DishName}</p>
            <p>!{props.TotalPrice}</p>
            <p>!{props.deliveryStatus}</p>
            <p>!{props.date}</p>
            
        </div>
    )

}