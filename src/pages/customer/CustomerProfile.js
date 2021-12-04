import React, { useEffect, useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export default function CustomerProfile(props) 
{
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
            setActiveOrder("No active orders")
        })
    },[])

    if (isLoading) {
        
    }
    
    return(
        <div >
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <div className="customer-profile-container">
           <div className="customer-info">
               <p>user ID: {decodedToken.userId}</p>
               <p>Name: {decodedToken.userInfo.customer_first_name} {decodedToken.userInfo.customer_last_name}</p>
               <p>adress: {decodedToken.userInfo.customer_address}</p>
               <p>email: {decodedToken.userInfo.customer_email}</p>
               <p>phone: {decodedToken.userInfo.customer_phone_number}</p>
           </div>
           <Link to="/history" jwt={props.jwt}><button>My order history</button></Link>    
           <div><h1>Active orders</h1>
             {activeOrder.map(item => <p onClick={e => handleClick(item.orderId)}>{item.text}</p>)}

           </div>
           </div>
            <Footer jwt={props.jwt}/>
        </div>
    )
  }