import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import jwt from 'jsonwebtoken';
import React from "react";
import { Card, Button, Check } from "react-bootstrap";

export default function HistoryCard (props)
{

    const [isLoading, setLoading] = useState(true);
    const [history, setHistory] = useState();

    const decodedToken = jwt.decode(props.jwt)
    console.log(decodedToken+" from the historypage")

    useEffect(() => {
        let path = "https://voulutora-backend.herokuapp.com/orders/history/"+decodedToken.userId
        axios.get(path)
        .then(response => {
            setHistory(response.data[0].id)
            setLoading(false)
            console.log(response.data[0].id);
        })
        .catch(err => {
            console.log(err);
            setHistory("You haven't made any orders yet")
        })
    },[])

    if (isLoading) {
        
    }

    return (
        <div>
            <img></img>
            <h1>!{props.RestaurantName}</h1>
            <p>!{history}</p>
            <p>!{props.DishName}</p>
            <p>!{props.TotalPrice}</p>
            <p>!{props.deliveryStatus}</p>
            <p>!{props.date}</p>
            
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