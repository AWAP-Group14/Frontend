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
               <p>Name {props.name} {props.lastname}</p>
               <p>adress {props.address}</p>
               <p>email {props.email}</p>
               <p>phone {props.phone}</p>
               <button>Edit</button>
           </div>
           <button>My order history</button>
           <div>Active orders
               {props.activeOrders}
           </div>
           </div>
            <Footer />
        </div>
    )
  }