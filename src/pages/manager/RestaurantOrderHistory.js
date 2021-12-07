import React, { useEffect, useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import RestaurantHistoryCard from '../../page_components/manager/RestaurantHistoryCard';
import jwt from 'jsonwebtoken';
import axios from "axios";

import{ Container, Row } from "react-bootstrap";

export default function RestaurantOrderHistory(props) 
{
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
        let path = "https://voulutora-backend.herokuapp.com/orders/restauranthistory/"+decodedToken.restaurantInfo
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
    

    return(
        <div >
            <NavigationBar jwt={props.jwt} logout={props.logout}/>

            <div > 
                 <div className="mx-auto">
                 <h1>{decodedToken.restaurantInfo.restaurant_name} order history </h1>
             </div>
         </div>

        <Container className="mb-3 mt-3">
             <Row className="g-(3">
             {history.map((order) => <RestaurantHistoryCard history={order}/>)}
             </Row>
        </Container>
        <Footer />
        </div>
    )
  }
  