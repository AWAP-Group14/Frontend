import React, { useEffect, useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Link } from "react-router-dom";

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
            <div className="customer-profile-container">
           <div className="customer-info">
               <p>user ID {decodedToken.userId}</p>
               <p>Name {decodedToken.userInfo.customer_first_name} {decodedToken.userInfo.customer_last_name}</p>
               <p>adress {decodedToken.userInfo.customer_address}</p>
               <p>email {decodedToken.userInfo.customer_email}</p>
               <p>phone {decodedToken.userInfo.customer_phone_number}</p>
           </div>
           <Link to="/history" jwt={props.jwt}><button>My order history</button></Link>    
           <div><h1>Active orders</h1>
             {activeOrder}

           </div>
           </div>
            <Footer jwt={props.jwt}/>
        </div>
    )
  }