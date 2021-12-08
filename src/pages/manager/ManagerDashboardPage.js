import React from "react";
import { useState, useEffect } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/LandingPageManager.module.scss';
import OrderCard from '../../page_components/manager/OrderCard';
import {Button} from 'react-bootstrap';
import axios from 'axios'
import jwt from 'jsonwebtoken';
import { Link, useNavigate } from "react-router-dom";

export default function ManagerDashboardPage(props)
{
    const [activeOrder, setActiveOrder] = useState([{restaurant_name: "", id: "", total_price:"", date:"", items: [], delivery_address: "", order_comment: "", order_status: 0, order_delivery_type: 0, customer_id: "" }]);
    let navigate = useNavigate()
    const goToOrderHistory = () => {
        navigate("/manager/order_history", {state: {}})
    }

    const createItemArray = (data) => {
        const itemArray = []
        data.forEach(item => { itemArray.push({
            restaurant_name: item.restaurant_name, id: item.id, total_price:item.total_price, date: item.date, items: JSON.parse(item.items), delivery_address: item.delivery_address, order_comment: item.order_comment, order_status: item.order_status, order_delivery_type: item.order_delivery_type, customer_id: item.customer_id
        })})
        return itemArray
    }
    
    useEffect(() => {
        const decodedToken = jwt.decode(props.jwt)
        if(decodedToken != undefined) {
            let path = "https://voulutora-backend.herokuapp.com/orders/restaurantactive/" + decodedToken.restaurantInfo
            axios.get(path)
            .then(response => {
                setActiveOrder(createItemArray(response.data))
                console.log(activeOrder)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
                
            })
            
        } else {
            console.log("User need to login")
        }
    },[])
    
    return(
        <div className={styles.App}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <h1>Orders</h1>
            {activeOrder.slice(0).reverse().map((order) => <OrderCard order={order}/>)}
            <div className={styles.btnCont}>
            <Button onClick={goToOrderHistory}>Order history</Button>
            <Link to="/editMenu"><Button>Edit menu</Button></Link>
            </div>
            <Footer/>
        </div>
    )
  }
  
  