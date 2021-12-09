import React, { useEffect, useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import styles from './css_modules/ActiveOrder.module.scss'

import { Link, useNavigate } from "react-router-dom";

import { Container, Row, Col, Button, Card } from "react-bootstrap";


export default function ActiveOrder(props) 
{ 


    let orderStatus = "";

     if (props.activeOrderData.order_status == 0) {
        orderStatus = "Waiting confirmation"
    }
    if (props.activeOrderData.order_status == 1) {
        orderStatus = "Order accepted"
    }
    if (props.activeOrderData.order_status == 2) {
        orderStatus = "Cooking"
    }
    if (props.activeOrderData.order_status == 3) {
        orderStatus = "Ready for delivery"
    }
    if (props.activeOrderData.order_status == 4) {
        orderStatus = "Delivering"
    } 

    // Restarurant name, address, items, time remaining, status

    console.log(props.activeOrderData.items+" data from activeorder");

    
    return(
        <Col xs={12}>
                <Card className={styles.card}>                     
                    <Card.Header>
                        <div className="d-flex">
                            <Card.Title>RESTAURANT NAME: {props.activeOrderData.restaurant_name} </Card.Title>
                            <Card.Text className="ms-auto">STATUS: {orderStatus}</Card.Text>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <Card.Text>Delivery address: {props.activeOrderData.delivery_address}</Card.Text>
                            <Card.Text>Ordered items:</Card.Text>
                            <div className="ms-3">
                                {JSON.parse(props.activeOrderData.items).map(item => <p>{item.amount}x {item.item_name}</p>)} 
                            </div>
                        </div>                       
                    </Card.Body>
                    <Card.Body></Card.Body>
                    <Card.Footer>Estimated delivery time: {props.activeOrderData.estimated_time}</Card.Footer>
                </Card>
        </Col>
    )
  }
