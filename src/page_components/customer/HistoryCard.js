import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import jwt from 'jsonwebtoken';

export default function HistoryCard (props)
{
    

    const [isLoading, setLoading] = useState(true);
    const [history, setHistory] = useState([]);

    const decodedToken = jwt.decode(props.jwt)
    console.log(decodedToken+" from the historypage")

    useEffect(() => {
        let path = "https://voulutora-backend.herokuapp.com/orders/history/"+decodedToken.userId
        axios.get(path)
        .then(response => {
            setHistory(response.data[0])
            setLoading(false)
            console.log(response.data[0].id);
        })
        .catch(err => {
            console.log(err);
            
        })
    },[])

    if (isLoading) {
        
    }

    if (history != null) {

        let orderItems = JSON.parse(history.items)
        console.log(orderItems[0].item_name); 
        return(
        <div>
            <img></img>
            <h1>!{props.RestaurantName}</h1>
            <p>!{history.id}</p>
            <p>!{orderItems[0].item_name}</p>
            <p>!{history.delivery_address}</p>
            <p>!{history.total_price}</p>
            <p>!{props.date}</p>
            
        </div>
        )
    }

    if (history == null) {
        return (
                <h3>You haven't made any orders yet</h3>

            )
    }
    

}
