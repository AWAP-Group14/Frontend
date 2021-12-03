import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import jwt from 'jsonwebtoken';

export default function CustomerProfile(props) 
{

    const decodedToken = jwt.decode(props.jwt)
    console.log(decodedToken)
    
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
           <button>My order history</button>
           <div>Active orders
               {props.activeOrders}
           </div>
           </div>
            <Footer jwt={props.jwt}/>
        </div>
    )
  }