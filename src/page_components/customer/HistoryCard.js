import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import jwt from 'jsonwebtoken';
import { Card, Button, Check, Col } from "react-bootstrap";

export default function HistoryCard (props)
{
    
    if (props.history != null) {
        
        console.log(JSON.stringify(props.history.items)+" historyData")
        return (
            <Col xs={12}>
                
                <Card className="mx-auto" style={{ width: '500px' }}>
                    <Card.Body>
                        <Card.Title>Restaurant name {props.history.restaurant_name}</Card.Title>
                        <Card.Text>
                            <p>order ID {props.history.id}</p>
                            <div>
                                <p>Ordered items:</p>
                                <div className="ms-3">
                                    {props.history.items.map(item => <p>{item.amount} X {item.item_name}</p>)}
                                </div>
                            </div>
                            <p>Delivery address: {props.history.delivery_address}</p>
                            <p>Total price: {props.history.total_price} €</p>
                            <p>Delivery status: Delivered</p>
                            <p>Date of order: {props.history.date}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    } else {
        return (
            <h3>You haven't made any orders yet</h3> 
        )
    }
}
