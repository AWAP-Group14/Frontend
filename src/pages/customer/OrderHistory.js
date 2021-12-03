import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import HistoryCard from '../../page_components/customer/HistoryCard';
import styles from './css_modules/OrderHistory.module.scss'
import jwt from 'jsonwebtoken';

import{ Container, Row } from "react-bootstrap";

export default function OrderHistory(props) 
{

    const decodedToken = jwt.decode(props.jwt)
    console.log("from "+decodedToken.userInfo.customer_first_name)

    console.log(props.jwt+" from orderhistory");
    return(
        <div >
            <NavigationBar jwt={props.jwt} logout={props.logout}/>

            <div className={styles.orderHistoryHeader}> 
                <div className="mx-auto">
                    <h1>{decodedToken.userInfo.customer_first_name} {decodedToken.userInfo.customer_last_name} order history</h1>
                </div>
            </div>

            <Container className="mb-3 mt-3">
                <Row className="g-3">
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    <HistoryCard jwt={props.jwt}/>
                    
                </Row>
            </Container>
            <Footer />
        </div>
    )
  }
  