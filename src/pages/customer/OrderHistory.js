import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import HistoryCard from '../../page_components/customer/HistoryCard';

export default function OrderHistory(props) 
{
    return(
        <div >
            <NavigationBar/>
            <div>
                <h1>Your previous choices</h1>
                <HistoryCard />
                <HistoryCard />
            </div>

            <Footer />
        </div>
    )
  }
  