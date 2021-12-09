import React from 'react';
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import { Row, Button, Col, Modal, Form } from "react-bootstrap";
import styles from './css_modules/RestaurantOrderStatus.module.scss';
import { useState, useEffect } from "react";
import axios from 'axios' 
import { useLocation } from "react-router-dom";
import PageFiller from '../../page_components/shared/PageFiller';

export default function RestaurantOrderStatus(props)
{
    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}
    const [status, setStatus] = useState("")
    const [custName, setCustName] = useState({
        firstname: "", lastname: ""
    });
    const [ButtonVariant, setButtonVariant] = useState(["outline-success", "outline-success", "outline-success", "outline-success", "outline-success"])
    const [ButtonDisabled, setButtonDisabled] = useState([false, false, false, false, false])
    const [time, setTime] = useState("")
    const [cancelButtonDisabled, setCancelButtonDisabled] = useState(false)

    let location = useLocation()
    useEffect(() => {
        console.log(location.state.orderInfo)
        let path = "https://voulutora-backend.herokuapp.com/customer/" + location.state.orderInfo.customer_id
        axios.get(path)
        .then(response => {
            setCustName({firstname: response.data[0].customer_first_name, lastname: response.data[0].customer_last_name})
            
        })
        .catch(err => {
            console.log(err);
        })

        let otherPath = "https://voulutora-backend.herokuapp.com/orders/restaurant/" + location.state.orderInfo.id
        axios.get(otherPath)
        .then(response => {
            checkStatus(response.data[0].order_status)
            if(response.data[0].order_status == 6) {
                setStatus("CANCELLED")
                setCancelButtonDisabled(true)
            } else if(response.data[0].order_status == 5) {
                setStatus("DELIVERED")
                setCancelButtonDisabled(true)
            }
            setTime(response.data[0].estimated_time)
        })
        .catch(err => {
            console.log(err);
        })




    },[])



    const handleStatusButtonClick = (status) => {
        console.log(location.state.orderInfo.order_status)
        let path = 'https://voulutora-backend.herokuapp.com/orders/changestatus/' + location.state.orderInfo.id +"?status=" + status
        axios.put(path)
        .then(response => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
        
    }

    const handleCancel = () => {
        let path = 'https://voulutora-backend.herokuapp.com/orders/changestatus/' + location.state.orderInfo.id +"?status=6"
        axios.put(path)
        .then(response => {
            window.location.reload()
            setStatus("CANCELLED")
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    const checkStatus = (order_status) => {
        const statusArray = ["outline-success", "outline-success", "outline-success", "outline-success", "outline-success"]
        const disabledArray = [false, false, false, false, false]
        for (let i = 0; i < order_status; i++) { 
            statusArray[i] = "success"
            disabledArray[i] = true
            
        }
        setButtonVariant(statusArray)
        setButtonDisabled(disabledArray)
    }



    return (
        <div>
        <NavigationBar jwt={props.jwt} logout={props.logout}/>
        
           <div>
               <Row>
                   <Col > 
                   <div className={styles.infoColumn}>
                        <p>Order ID: </p>
                        <p>{location.state.orderInfo.id}</p>
                        <p>Ordered items:</p>
                        <div className="ms-3">
                            {location.state.orderInfo.items.map(item => <p>{item.amount} x {item.item_name}</p>)}
                        </div>
                        <p>Comment: {location.state.orderInfo.order_comment}</p>
                        <p>Customer: {custName.firstname} {custName.lastname}</p>
                        <p>Time of Delivery: {time}</p>
                    </div>
                </Col>
                <Col >
                <div className={styles.btnColumn} >
                    <h2>Order status: {status}</h2>
                    <Button size="lg" variant={ButtonVariant[0]} disabled={ButtonDisabled[0]} >Confirm</Button>
                    <Button size="lg" variant={ButtonVariant[1]} disabled={ButtonDisabled[1]} onClick={() => handleStatusButtonClick(2)}>Cooking in progress</Button>
                    <Button size="lg" variant={ButtonVariant[2]} disabled={ButtonDisabled[2]} onClick={() => handleStatusButtonClick(3)}>Ready for delivery</Button>
                    <Button size="lg" variant={ButtonVariant[3]} disabled={ButtonDisabled[3]} onClick={() => handleStatusButtonClick(4)}>Sent to customer</Button>
                    <Button size="lg" variant={ButtonVariant[4]} disabled={ButtonDisabled[4]}>Delivered</Button>
                </div>
                <div className={styles.cancelBtn}>
                    <Button size="lg" variant="danger" disabled={cancelButtonDisabled} onClick={handleCancel}>Cancel</Button>
                </div>
                </Col>
                </Row> 
           </div>
           <PageFiller/>

        <Footer/>
        </div>
    )
}