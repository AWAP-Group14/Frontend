import React, {useEffect, useLayoutEffect,  useState} from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import styles from './css_modules/OrderStatus.module.scss';
import { FaCheck, FaMortarPestle, FaCar, FaFlag, FaTimes } from "react-icons/fa";
import RestaurantInfoBox from "../../page_components/customer/RestaurantInfoBox";
import PageFiller from "../../page_components/shared/PageFiller";

import {ListGroup, Button, Container, Row, Col, Card} from 'react-bootstrap';

import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
export default function OrderStatus(props) 
{
    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}
    let location = useLocation() 
    const[state, setState] = useState([false, false, false, false, false, false])
    const[danger, setDanger] = useState("")
    const[orderInfo, setOrderInfo]= useState({
        restaurant_name: "", id: "", total_price:"", date:"", items: [], delivery_address: "", order_comment: "", order_status: 0, order_delivery_type: 0, customer_id: "", estimated_time: "", order_delivery_type: 0 
    })
    const[items, setItems] = useState([])
    const[timeOfDeliveryText, setTimeOfDeliveryText] = useState("")
    const[orderIdState, setOrderId] = useState("")
    var orderId

    
let params = useParams();
const [info, setInfo] = useState({
    name: "",
    address: "",
    operating_hours: [],
    email: "",
});


    const setStatus = (orderStatus) => {
        var falseArray = [false, false, false, false, false, false]
        if(orderStatus == 6) {
            setDanger("danger")
            setState(falseArray)
        } else {
            for (let i = 0; i <= orderStatus; i++) { 
                falseArray[i] = true
            }
            setState(falseArray)
        }
    }

    const handleReceived = () => {
        let path = 'https://voulutora-backend.herokuapp.com/orders/changestatus/' + orderIdState +"?status=5"
        axios.put(path)
        .then(response => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
        
    }

    useEffect(() => {
        if(location.state != undefined) {
            orderId = location.state.orderId
            setOrderId(orderId)
        } else {
            orderId = props.orderId
            setOrderId(orderId)
        }
        let path = 'https://voulutora-backend.herokuapp.com/orders/' + orderId
        axios.get(path)
        .then(response => {
            setStatus(response.data[0].order_status)
            if(response.data[0].order_status > 0) {
                setTimeOfDeliveryText("Estimated time of delivery: " + response.data[0].estimated_time)
            }
            setOrderInfo(response.data[0])
            setItems(JSON.parse(response.data[0].items))
        })
        .catch(err => {
            console.log(err);
        })
    }, []);


    return(
        <div >
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <div className="text-center py-4 mb-4" style={{backgroundColor:"#041f42",color:"white"}}>
                <h1>ORDER STATUS VIEW</h1>
            </div>
            <Container>
                
                <Row className="g-4">
                
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header className="text-center">
                            <Card.Title>
                            RESTAURANT INFO
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Card.Title>{orderInfo.restaurant_name}</Card.Title>
                                <Card.Text>Delivery address: {orderInfo.delivery_address}</Card.Text>
                                <Card.Text>Ordered items:</Card.Text>
                                <div className="ms-3">
                                    {items.map(item => <p>{item.amount} x {item.item_name} </p>)}
                                </div>
                            </div>  
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>Order ID: {orderIdState}</Card.Text>
                        </Card.Footer>
                    </Card>
               </Col>

                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header className="text-center">
                            <Card.Title>Status</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="text-center">
                                <Card.Title>
                                {timeOfDeliveryText}
                                </Card.Title>
                            </Card.Text>
                        <ListGroup className="text-center" numbered>
                            <ListGroup.Item className="" as="li" active={state[0]}>Waiting for restaurant confirmation...<FaCheck className="ms-4" /> </ListGroup.Item>
                            <ListGroup.Item as="li" active={state[1]}>Restaurant confirmed your order <FaCheck className="ms-4" /> </ListGroup.Item>
                            <ListGroup.Item as="li" active={state[2]}>Restaurant is preparing your order<FaMortarPestle className="ms-4" /> </ListGroup.Item>
                            <ListGroup.Item as="li" active={state[3]}>Ready for delivery <FaCheck className="ms-4" /> </ListGroup.Item>
                            <ListGroup.Item as="li" active={state[4]}>Order is on the way <FaCar className="ms-4" /> </ListGroup.Item>
                            <ListGroup.Item as="li" active={state[5]}>Delivered <FaFlag className="ms-4" /> </ListGroup.Item>
                            <ListGroup.Item as="li" variant={danger}>Canceled <FaTimes className="ms-4" /> </ListGroup.Item>
                            
                        </ListGroup>
                        <Button className="mt-2" style={{width:"100%"}} disabled={false} variant = "success" onClick={handleReceived}>Confirm order received</Button>
                        </Card.Body>
                    </Card>
               </Col>
                </Row>
            </Container>
            <PageFiller/>
            <Footer/>

        </div>
    )
  }

  /* <div className={styles.RestaurantInfoBox}> */
                   /* <p>Something went wrong with your order?</p> */
                   /* <RestaurantInfoBox restaurantInfo= {restaurantInfo}/> */
               /* </div> */