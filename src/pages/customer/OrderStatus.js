import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import styles from './css_modules/OrderStatus.module.scss';
import { FaCheck, FaMortarPestle, FaCar, FaFlag, FaTimes } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import RestaurantInfoBox from "../../page_components/customer/RestaurantInfoBox";

import {ListGroup} from 'react-bootstrap';


export default function OrderStatus(props) 
{
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
                   <RestaurantInfoBox/>
               </div>
            </div>

            <Footer />
        </div>
    )
  }