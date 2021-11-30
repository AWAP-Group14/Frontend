import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import { FaCheck, FaMortarPestle } from "react-icons/fa";


export default function OrderStatus(props) 
{
    return(
        <div >
            <NavigationBar/>
            <div>
                <h1>Your order {props.orderId} status</h1>
               <div className="confirmed">
                   <p>Restaurant confirmed order <FaCheck /></p>
               </div>
               <div className="cooking">
                   <p>resaturant is cooking your meal <FaMortarPestle /> </p>
                   
               </div>
               <div className="ready">
                   <p>ready for delivery</p>
                   
               </div>
               <div className="delivering">
                   <p>food is on the way</p>
                   
               </div>
               <div className="delivered">
                   <p>delivered</p>
                   
               </div>
            </div>

            <Footer />
        </div>
    )
  }