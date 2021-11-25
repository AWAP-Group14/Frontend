import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';

export default function Payment(props) 
{
    function handleClick(props){
     console.log('restaurant adress');
    }
    
    return(
        <div >
            <NavigationBar/>
            <div>
                <div>Total: {props.TotalPrice}</div>
                <p>Delivery time: {props.deliveryTime}</p>
                <input type="button" onClick={() => handleClick()} value="I will pick up order myself"></input>
                <p>Check your delivery adress: {props.deliveryAddress}</p>
                <button>Confirm</button>
                <input type="text" placeholder="other adress"></input>
                <input type="submit" onClick={() => handleClick()} value="Other adress"></input>
            </div>
            <div className="PaymentForm">

            </div>

            <Footer />
        </div>
    )
  }
  

