import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import jwt from 'jsonwebtoken';
import { Card, Button, Check, Col } from "react-bootstrap";

export default function HistoryCard (props)
{
    

    const [isLoading, setLoading] = useState(true);
    const [history, setHistory] = useState([{restaurant_name: "", id: "", total_price:"", date:"", items:[]}]);
    const [items, setItems] = useState([{items:""}]);

    const decodedToken = jwt.decode(props.jwt)
    console.log(decodedToken+" from the historypage")

    useEffect(() => {
        let path = "https://voulutora-backend.herokuapp.com/orders/history/"+decodedToken.userId
        axios.get(path)
        .then(response => {
            setHistory(response.data[0])
            let orderItems = JSON.parse(response.data[0].items)
            setItems(orderItems)
            console.log("items as object "+orderItems);
            setLoading(false)
            console.log(response.data[0]);
        })
        .catch(err => {
            console.log(err);
            
        })
    },[])

    if (isLoading) {
        
    }

    if (history != null) {
    
    return (
        <Col xs={12}>
            
            <Card className="mx-auto" style={{ width: '500px' }}>
                <Card.Body>
                     <Card.Title>RestaurantName {history.restaurant_name}</Card.Title>
                     <Card.Text>
                         <p>orderId {history.id}</p>
                         <div>
                            <p>Ordered items:</p>
                            <div className="ms-3">
                                <p>- {items[0].amount}x {items[0].item_name}</p>
                            </div>
                        </div>
                         <p>Delivery address {history.delivery_address}</p>
                         <p>TotalPrice {history.total_price} €</p>
                         <p>deliveryStatus {props.deliveryStatus}</p>
                         <p>date {history.date}</p>
                     </Card.Text>
                 </Card.Body>
            </Card>
        </Col>
    )
    }

    if (history == null) {
        return (
                <h3>You haven't made any orders yet</h3>

            )
    }

}
