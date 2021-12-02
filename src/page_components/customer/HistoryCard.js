import React from "react";
import { Card, Button, Check } from "react-bootstrap";

export default function HistoryCard (props)
{
    return (
        <div>
            <Card style={{ width: '500px' }}>
                <Card.Body>
                     <Card.Title>RestaurantName{props.RestaurantName}</Card.Title>
                     <Card.Text>
                         <p>orderId{props.orderId}</p>
                         <p>DishName{props.DishName}</p>
                         <p>TotalPrice{props.TotalPrice} €</p>
                         <p>deliveryStatus{props.deliveryStatus}</p>
                         <p>date{props.date}</p>
                     </Card.Text>
                 </Card.Body>
            </Card>
        </div>
    )

}