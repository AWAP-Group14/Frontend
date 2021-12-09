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

    // Restarurant name, address, items, time remaining, status
    
    return(
        <Col xs={12}>
            <Link to={'/ORDER_ID' + props.restaurant_name} style={{textDecoration: 'inherit',color:'inherit'}}>
                <Card className={styles.card}>                     
                    <Card.Header>
                        <div className="d-flex">
                            <Card.Title>RESTAURANT NAME</Card.Title>
                            <Card.Text className="ms-auto">STATUS</Card.Text>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <Card.Text>Delivery address: ADDRESS</Card.Text>
                            <Card.Text>Ordered items:</Card.Text>
                            <div className="ms-3">
                                MAP ITEMS HERE
                            </div>
                        </div>                       
                    </Card.Body>
                    <Card.Body></Card.Body>
                    <Card.Footer>Estimated delivery time: TIME</Card.Footer>
                </Card>
            </Link>
        </Col>
    )
  }
