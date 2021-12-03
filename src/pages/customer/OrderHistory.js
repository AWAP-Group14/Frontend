import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import HistoryCard from '../../page_components/customer/HistoryCard';

export default function OrderHistory(props) 
{

    console.log(props.jwt+" from orderhistory");
    return(
        <div >
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <div>
                <h1>Your previous choices</h1>
                <HistoryCard jwt={props.jwt}/>
            </div>

            <Footer />
        </div>
    )
  }
  