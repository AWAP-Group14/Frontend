import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import jwt from 'jsonwebtoken';
import { Card, Button, Check, Col } from "react-bootstrap";

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
        <Col xs={12}>
            
            <Card className="mx-auto" style={{ width: '500px' }}>
                <Card.Body>
                     <Card.Title>RestaurantName{props.RestaurantName}</Card.Title>
                     <Card.Text>
                         <p>orderId{props.orderId}</p>
                         <div>
                            <p>Ordered items:</p>
                            <div className="ms-3">
                                <p>- MAPPED ITEM</p>
                                <p>- MAPPED ITEM</p>
                                <p>- MAPPED ITEM</p>
                            </div>
                        </div>
                         <p>TotalPrice{props.TotalPrice} €</p>
                         <p>deliveryStatus{props.deliveryStatus}</p>
                         <p>date{props.date}</p>
                     </Card.Text>
                 </Card.Body>
            </Card>
        </Col>
    )

}