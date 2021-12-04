import React, {useEffect, useLayoutEffect,  useState} from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import styles from './css_modules/OrderStatus.module.scss';
import { FaCheck, FaMortarPestle, FaCar, FaFlag, FaTimes } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import RestaurantInfoBox from "../../page_components/customer/RestaurantInfoBox";

import {ListGroup} from 'react-bootstrap';

import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';

export default function OrderStatus(props) 
{
    let location = useLocation() 
    const[state, setState] = useState([false, false, false, false, false, false])
    const[danger, setDanger] = useState("")
    const[orderIdState, setOrderId] = useState("")
    const [restaurantInfo, setRestaurantInfo] = useState({
        restaurant_address: "",
        restaurant_image: "",
        restaurant_name: "",
        restaurant_operating_hours: "",
        restaurant_price_level: 0,
        restaurant_type: ""
    });
    var orderId


    const setStatus = (orderStatus) => {
        var falseArray = [false, false, false, false, false, false]
        if(orderStatus == 6) {
            setDanger("danger")
            setState(falseArray)
        } else {
            for (let i = 0; i <= orderStatus; i++) { 
                falseArray[i] = true
            }
            console.log(falseArray)
            setState(falseArray)
        }
    }

    useEffect(() => {
        if(location.state != undefined) {
            orderId = location.state.orderId
            setOrderId(orderId)
            setRestaurantInfo(location.state.restaurantInfo)
        } else {
            orderId = props.orderId
            console.log(props.orderId)
            setOrderId(orderId)
            setRestaurantInfo(props.restaurantInfo)
        }
        let path = 'https://voulutora-backend.herokuapp.com/orders/' + orderId
        axios.get(path)
        .then(response => {
            setStatus(response.data[0].order_status)
        })
        .catch(err => {
            console.log(err);
        })
    }, []);



    return(
        <div >
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <div>
                
                <ListGroup className={styles.listGroup}>
                    <h1>Your order status</h1>
                    <p>Order ID: {orderIdState}</p>
                    <ListGroup.Item as="li" active={state[0]}>Waiting for restaurant confirmation <FaCheck /> </ListGroup.Item>
                   <ListGroup.Item as="li" active={state[1]} >Restaurant confirmed order <FaCheck /> </ListGroup.Item>
                   <ListGroup.Item as="li" active={state[2]}>Restaurant is cooking your meal <FaMortarPestle /> </ListGroup.Item>
                   <ListGroup.Item as="li" active={state[3]}>Ready for delivery <FaCheck /> </ListGroup.Item>
                   <ListGroup.Item as="li" active={state[4]}>Food is on the way <FaCar /> </ListGroup.Item>
                   <ListGroup.Item as="li" active={state[5]}>Delivered <FaFlag /> </ListGroup.Item>
                   <ListGroup.Item as="li" variant={danger}>Canceled <FaTimes /> </ListGroup.Item>
               </ListGroup>
               
               {/* <div className={styles.RestaurantInfoBox}> */}
                   {/* <p>Something went wrong with your order?</p> */}
                   {/* <RestaurantInfoBox restaurantInfo= {restaurantInfo}/> */}
               {/* </div> */}

            </div>

            <Footer />
        </div>
    )
  }