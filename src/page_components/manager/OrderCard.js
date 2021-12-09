import React from "react";
import { useState, useEffect } from "react";
import {Card, Button, Form, Modal, Col, Row, ButtonGroup, Alert  } from "react-bootstrap";
import styles from './css_modules/OrderCard.module.scss'
import axios from 'axios'
import {useNavigate } from "react-router-dom";

export default function OrderCard(props) 
{
    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}
    const [ConfirmShow, setConfirmShow] = useState(false);
    const [CancelShow, setCancelShow] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [orderAddress, setOrderAddress] = useState("");
    const [orderStatus, setOrderStatus] = useState(0)
    const [time, setTime] = useState({hour: "09", minute: "00"})
    let navigate = useNavigate()

    const handleConfirmClose = () => {
        setConfirmShow(false);
        setOrderConfirmed(true);
        let path = 'https://voulutora-backend.herokuapp.com/orders/changestatus/' + props.order.id +"?status=1&time=" + time.hour + ":" + time.minute
        axios.put(path)
        .then(response => {
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    
    const handleCancel = () => {
        setOrderConfirmed(true);
        let path = 'https://voulutora-backend.herokuapp.com/orders/changestatus/' + props.order.id +"?status=6"
        axios.put(path)
        .then(response => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleInputChange = (event) => {
        setTime((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };

    useEffect(() => {
        if(props.order.id != "") {
            let path = "https://voulutora-backend.herokuapp.com/orders/restaurant/" + props.order.id
            axios.get(path)
            .then(response => {
                if(response.data[0].order_status != 0) {
                    setOrderConfirmed(true);
                }
            })
            .catch(err => {
                console.log(err);
            })
        } else {
        }
        


        if(props.order.order_delivery_type == 1) {
            setOrderAddress("Address: " + props.order.delivery_address)
        } else {
            setOrderAddress("Take Away")
        }

    },[])

    const handleStatusButton = () => {
        navigate("/manager/order_status", {state: {orderInfo: props.order, time: time}})
    }

    const handleConfirmShow = () => setConfirmShow(true);

    const handleCancelClose = () => setCancelShow(false);

    if(!orderConfirmed) {
        return(
            
                <Col xs={12}>
                <Card>
                <Card.Header><Card.Title>Order ID: {props.order.id} </Card.Title></Card.Header>
                    <Card.Body>
                            <Row>
                                <Col xs={12} lg={6} xl={8}>
                                    <Card.Text>Order:</Card.Text>
                                    <div className="ms-3">
                                        {props.order.items.map(item => <p>{item.amount} x {item.item_name}</p>)}
                                    </div>
                                    <p>{orderAddress}</p>
                                    <p>Comments: {props.order.order_comment}</p>
                                    <Card.Title>Total price: {props.order.total_price} €</Card.Title>
                                    </Col>

                                    <Col xs={12} lg={6} xl={4} className="">
                                        <Alert variant="warning" className="text-center d-flex flex-column" style={{height:"100%"}}>
                                            <div>
                                            <Alert.Heading>Action needed!</Alert.Heading>
                                            <p>A new order needs your actions to proceed.</p>
                                            </div>
                                            <div className="d-flex" style={{marginTop:"auto", width:"100%"}}>
                                                <Button style={{width:"50%"}} onClick={handleConfirmShow} size="lg" variant="success" className="me-3">
                                                    Confirm
                                                </Button>
                                                <Button style={{width:"50%"}} onClick={handleCancel} size="lg" variant="danger">
                                                    Cancel
                                                </Button>
                                            </div>
                                            
                                        </Alert>

                                </Col>
                            </Row>
                            
                            
                            <Modal 
                            show={ConfirmShow} 
                            onHide={() => setConfirmShow(false)} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Enter approximate delivery time:</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Row >
                                            <Col>
                                    <Form.Select 
                                    name="hour"
                                    value={time.hour}
                                    onChange={handleInputChange}>
                                        <option>09</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                    </Form.Select>
                                    </Col>
                                    <Col>
                                    <Form.Select 
                                     name="minute"
                                     value={time.minute}
                                     onChange= {handleInputChange}>
                                        <option>00</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </Form.Select>
                                    </Col>
                                    </Row>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" onClick={handleConfirmClose}>
                                        Confirm
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                    </Card.Body>
                </Card>

            </Col>
        )

    } else {
        return(
            
            <Col xs={12}>
                <Card>
                    <Card.Header><Card.Title>Order ID: {props.order.id} </Card.Title></Card.Header>
                    <Card.Body>
                        



                            <Row>
                                <Col xs={12} lg={6} xl={8}>
                                    <Card.Text>Order:</Card.Text>
                                    <div className="ms-3">
                                        {props.order.items.map(item => <p>{item.amount} x {item.item_name}</p>)}
                                    </div>
                                    <p>{orderAddress}</p>
                                    <p>Comments: {props.order.order_comment}</p>
                                    <Card.Title>Total price: {props.order.total_price} €</Card.Title>
                                    </Col>

                                    <Col xs={12} lg={6} xl={4} className="">
                                    <Alert variant="info" className="text-center d-flex flex-column" style={{height:"100%"}}>
                                        <div>
                                            <Alert.Heading>Order has been accepted!</Alert.Heading>
                                            <p>This order has been accepted by the restaurant and is being currently processed. You can manage the order from the button below.</p>
                                            </div>
                                            <div className="d-flex" style={{marginTop:"auto", width:"100%"}}>
                                            <Button style={{width:"100%"}} onClick={handleStatusButton} size="lg" variant="primary">
                                                Manage
                                            </Button>
                                        </div>
                                            
                                        </Alert>

                                </Col>
                            </Row>


                    </Card.Body>
                </Card>

            </Col>
        )
        
    }
}