import React, {useState, useEffect} from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import axios from 'axios';
import { Form, Button,} from "react-bootstrap";
import styles from "./css_modules/Payment.module.scss"
import {Link, useLocation} from "react-router-dom";
import jwt from 'jsonwebtoken';

export default function Payment(props) 
{
    
    let location = useLocation()
    const [address, setAddress] = useState("")

    function handleClick(props){
        setAddress("Restaurant address")
    }

    useEffect(() => {
        const decodedToken = jwt.decode(props.jwt)
        if(decodedToken != undefined) {
            setAddress(decodedToken.userInfo.customer_address)
        } else {
            console.log("User need to log in")
        }
    },[])
    
    return(
        <div >
            <NavigationBar/>
            <div className={styles.TotalPrice}>
                    Total: {location.state.price} €
                </div>
            <div className={styles.container}>
                <div className={styles.Delivery}>
                
                <p>Delivery time: 30 minutes</p>
                <Button onClick={() => handleClick()} >
                    I will pick order myself
                </Button>
                <p>{props.RestaurantInfoBox}</p>
                
                <p>Check your delivery adress: {address}</p>
                <Button>Confirm</Button>
                <Form.Group>
                        <Form.Label>Other adress</Form.Label>
                        <Form.Control type="text" placeholder="Other adress" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Confirm new adress
                     </Button>
            </div>
            
            <div className={styles.PaymentForm}>
                <Form>
                    <Form.Group>
                        <Form.Label>Card Owner</Form.Label>
                        <Form.Control type="text" placeholder="Card Owner" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="number" placeholder="Card Number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="number" placeholder="XXX" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Confirm payment
                     </Button>
                </Form>
            </div>
            </div>
            <Footer/>
            
        </div>
    )
  }
  

