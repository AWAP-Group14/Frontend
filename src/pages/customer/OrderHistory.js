import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import HistoryCard from '../../page_components/customer/HistoryCard';
import{Row} from "react-bootstrap";

export default function OrderHistory(props) 
{
    return(
        <div >
            <NavigationBar/>
            <Row className="g-3">
                <h1>Your previous choices: </h1>
                <HistoryCard />
                <HistoryCard />
            </Row>

            <Footer />
        </div>
    )
  }
  