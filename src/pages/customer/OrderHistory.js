import React, { useEffect, useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import HistoryCard from '../../page_components/customer/HistoryCard';
import styles from './css_modules/OrderHistory.module.scss'
import jwt from 'jsonwebtoken';
import axios from "axios";
import PageFiller from "../../page_components/shared/PageFiller";

import{ Container, Row } from "react-bootstrap";

export default function OrderHistory(props) 
{
    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}
    const [isLoading, setLoading] = useState(true);
    const [history, setHistory] = useState([{restaurant_name: "", id: "", total_price:"", date:"", items: [], delivery_address: ""}]);
    const [items, setItems] = useState([{items:""}]);

    const decodedToken = jwt.decode(props.jwt)
    console.log(decodedToken+" from the historypage")

    const createItemArray = (data) => {
        const itemArray = []
        data.forEach(item => { itemArray.push({
            restaurant_name: item.restaurant_name, id: item.id, total_price:item.total_price, date: item.date, items: JSON.parse(item.items), delivery_address: item.delivery_address
        })})
        return itemArray
    }

    useEffect(() => {
        let path = "https://voulutora-backend.herokuapp.com/orders/history/"+decodedToken.userId
        axios.get(path)
        .then(response => {
            setHistory(createItemArray(response.data))
            let orderItems = JSON.parse(response.data[0].items)
            setItems(orderItems)
            console.log("items as object "+orderItems);
            setLoading(false)
            console.log(history);
        })
        .catch(err => {
            console.log(err);
            
        })
    },[])

    if(!isLoading) {
        return(
            <div >
                <NavigationBar jwt={props.jwt} logout={props.logout}/>

                <div className={styles.orderHistoryHeader}> 
                    <div className="mx-auto">
                        <h1>{decodedToken.userInfo.customer_first_name} {decodedToken.userInfo.customer_last_name} order history</h1>
                    </div>
                </div>

                <Container className="mb-3 mt-3">
                    <Row className="g-(3">
                        {history.map((order) => <HistoryCard history={order}/>)}
                        
                    </Row>
                </Container>
                <PageFiller/>
                <Footer />
            </div>
        )
    } else {
        return(
            <div >
                <NavigationBar jwt={props.jwt} logout={props.logout}/>

                <div className={styles.orderHistoryHeader}> 
                    <div className="mx-auto">
                        <h1>{decodedToken.userInfo.customer_first_name} {decodedToken.userInfo.customer_last_name} order history</h1>
                    </div>
                </div>
                <PageFiller/>
                <Footer />
            </div>
        )
    }
  }
  