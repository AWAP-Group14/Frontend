import React, {useState, useEffect} from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import styles from "./css_modules/Payment.module.scss"

export default function Payment(props) 
{
    
    
    function handleClick(props){
     console.log('restaurant adress');
    }

    useEffect(() => {
        axios.get('https://voulutora-backend.herokuapp.com/restaurants')
        .then(response => {
            console.log(response.data)
            props.TotalPrice = response.data.TotalPrice
        })
        .catch(err => console.log(err));
    },[])
    
    return(
        <div >
            <NavigationBar/>
            <div className={styles.TotalPrice}>
                    Total: {props.TotalPrice} €
                </div>
            <div className={styles.container}>
                <div className={styles.Delivery}>
                
                <p>Delivery time: {props.deliveryTime}</p>
                <Button onClick={() => handleClick()} >
                    I will pick order myself
                </Button>
                
                <p>Check your delivery adress: {props.deliveryAddress}</p>
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
  

