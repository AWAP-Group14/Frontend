import React, {useEffect, useLayoutEffect,  useState} from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import styles from './css_modules/OrderStatus.module.scss';
import { FaCheck, FaMortarPestle, FaCar, FaFlag, FaTimes } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import RestaurantInfoBox from "../../page_components/customer/RestaurantInfoBox";

import {ListGroup} from 'react-bootstrap';

import { useParams } from "react-router-dom";
import axios from 'axios';

export default function OrderStatus(props) 
{
    
let params = useParams();
const [info, setInfo] = useState({
    name: "",
    address: "",
    operating_hours: [],
    email: "",
});

useEffect( () => {
    let path = 'https://voulutora-backend.herokuapp.com/restaurants/' + params.restaurantName
    axios.get(path)
    .then(response => {
        setInfo({name: response.data[0].restaurant_name, address: response.data[0].restaurant_address, operating_hours: response.data[0].restaurant_operating_hours.split(";"), email: response.data[0].restaurant_email})
        
        console.log(response.data)
    })
    .catch(err => {
        console.log(err);
    })
}, []);



    return(
        <div >
            <NavigationBar />
            <div>
                
                <ListGroup className={styles.listGroup}>
                    <h1>Your order {props.orderId} status</h1>
                   <ListGroup.Item as="li" active >Restaurant confirmed order <FaCheck /> </ListGroup.Item>
                   <ListGroup.Item as="li" >Resaturant is cooking your meal <FaMortarPestle /> </ListGroup.Item>
                   <ListGroup.Item as="li">Ready for delivery <FaCheck /> </ListGroup.Item>
                   <ListGroup.Item as="li">Food is on the way <FaCar /> </ListGroup.Item>
                   <ListGroup.Item as="li">Delivered <FaFlag /> </ListGroup.Item>
                   <ListGroup.Item as="li" variant="danger">Canceled <FaTimes /> </ListGroup.Item>
               </ListGroup>
               <div className={styles.RestaurantInfoBox}>
                   <p>Something went wrong with your order?</p>
               </div>
            </div>

            <Footer />
        </div>
    )
  }