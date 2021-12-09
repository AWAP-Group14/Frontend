import React from "react";
import { useState, useEffect } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/LandingPageManager.module.scss';
import OrderCard from '../../page_components/manager/OrderCard';
import {Button, Container, InputGroup, Row} from 'react-bootstrap';
import axios from 'axios'
import jwt from 'jsonwebtoken';
import { Link, useNavigate } from "react-router-dom";
import PageFiller from "../../page_components/shared/PageFiller";


export default function ManagerDashboardPage(props)
{
    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}
    const [loading, setLoading] = useState(true)
    const [activeOrder, setActiveOrder] = useState([{restaurant_name: "", id: "", total_price:"", date:"", items: [], delivery_address: "", order_comment: "", order_status: 0, order_delivery_type: 0, customer_id: "" }]);
    let navigate = useNavigate()
    const goToOrderHistory = () => {
        navigate("/manager/order_history", {state: {}})
    }

    const goToEditMenu = () => {
        navigate("/editMenu", {state: {}})
    }

    const createItemArray = (data) => {
        const itemArray = []
        data.forEach(item => { itemArray.push({
            restaurant_name: item.restaurant_name, id: item.id, total_price:item.total_price, date: item.date, items: JSON.parse(item.items), delivery_address: item.delivery_address, order_comment: item.order_comment, order_status: item.order_status, order_delivery_type: item.order_delivery_type, customer_id: item.customer_id
        })})
        console.log(itemArray)
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
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                
            })
            
        } else {
            console.log("User need to login")
        }
    },[])
    
    if(!loading) {
        return(
            <div>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <div className="text-center py-4" style={{backgroundColor:"rgb(4, 31, 66)",color:"white"}}>
                <h1>DASHBOARD</h1>
            </div>

            <Container className="">
                <div className="text-center my-3">
                    <h2>Manage your restaurant</h2>
                    <div className={styles.btnCont}>
                        <Button onClick={goToOrderHistory}>Order history</Button>
                        <Button onClick={goToEditMenu}>Edit menu</Button>
                    </div>
                </div>
                <hr/>
                <h2 className="mb-4 mt-2" >Open Orders</h2>
                <Row className="g-4">
                    {activeOrder.map((order) => <OrderCard order={order} jwt={props.jwt}/>)}
                </Row>

                <PageFiller/>
                
            </Container> 
            <Footer jwt={props.jwt}/>
            </div>
        )
    } else {
        return(
            <p>Loading</p>
        )
    }
  }
  
  