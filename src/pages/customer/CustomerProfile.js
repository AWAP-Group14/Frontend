import React, { useEffect, useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from './css_modules/CustomerProfile.module.scss';

import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function CustomerProfile(props) 
{
    const [isLoading, setLoading] = useState(true);
    const [activeOrder, setActiveOrder] = useState();

    const decodedToken = jwt.decode(props.jwt)
    console.log(decodedToken)


 
    useEffect(() => {
        let path = "https://voulutora-backend.herokuapp.com/orders/active/"+decodedToken.userId
        axios.get(path)
        .then(response => {
            setActiveOrder("Order to address "+response.data[0].delivery_address)
            setLoading(false)
            console.log();
        })
        .catch(err => {
            console.log(err);
            setActiveOrder("No active orders")
        })
    },[])

    if (isLoading) {
        
    }
    
    return(
        <div >
            <NavigationBar jwt={props.jwt} logout={props.logout}/>

            <Container className="my-3">
                <Row>
                    <Col xs={3}>
                        <Card className="">
                            <Card.Body>
                                <Card.Title>{decodedToken.userInfo.customer_first_name} {decodedToken.userInfo.customer_last_name}</Card.Title>
                                <p>User ID: {decodedToken.userId}</p>
                                <p>Adress: {decodedToken.userInfo.customer_address}</p>
                                <p>Email: {decodedToken.userInfo.customer_email}</p>
                                <p>Phone number: {decodedToken.userInfo.customer_phone_number}</p>
                                <Link to="/history" jwt={props.jwt}><Button>View order history</Button></Link> 
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={9}>
                        <div>
                            <h1>Active orders</h1>
                            {activeOrder}
                            
                        </div>
                        
                    </Col> 
                </Row>
            </Container>

            <Footer jwt={props.jwt}/>
        </div>
    )
  }