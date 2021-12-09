import React, { useEffect, useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import jwt from 'jsonwebtoken';
import axios from 'axios';

import { Link, useNavigate } from "react-router-dom";
import styles from './css_modules/CustomerProfile.module.scss';

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import PageFiller from "../../page_components/shared/PageFiller";


export default function CustomerProfile(props) 
{ 
    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}
    const [isLoading, setLoading] = useState(true);
    const [activeOrder, setActiveOrder] = useState([]);
    const [orderId, setOrderId] = useState("")

    const decodedToken = jwt.decode(props.jwt)
    console.log(decodedToken)
    var orderIdTest
    let navigate = useNavigate()
    
    const handleClick = (id) => {
        if(activeOrder != "No active orders" ) {
            navigate("/status", {state: {orderId: id}})
        }
    }


    const createOrderArray = (data) => {
        const itemArray = []
        data.forEach(item => { itemArray.push({
            text: "Order to address: " + item.delivery_address, orderId: item.id
        })})
        return itemArray
    }

    useEffect(() => {
        let path = "https://voulutora-backend.herokuapp.com/orders/active/"+decodedToken.userId
        axios.get(path)
        .then(response => {
            setActiveOrder(createOrderArray(response.data))
            setOrderId(response.data[0].id)
            orderIdTest = response.data[0].id
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setActiveOrder([])
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
                            {activeOrder.map(item => <Button variant="link" onClick={e => handleClick(item.orderId)}>{item.text}</Button>)}
                        </div>  
                    </Col> 
                </Row>
            </Container>

            <PageFiller/>
            <Footer jwt={props.jwt}/>
        </div>
    )
  }
