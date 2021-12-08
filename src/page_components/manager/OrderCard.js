import React from "react";
import { useState, useEffect } from "react";
import {Card, Button, Form, Modal, Col, Row, ButtonGroup  } from "react-bootstrap";
import styles from './css_modules/OrderCard.module.scss'
import axios from 'axios'
import {useNavigate } from "react-router-dom";

export default function OrderCard(props) 
{
    const [ConfirmShow, setConfirmShow] = useState(false);
    const [CancelShow, setCancelShow] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    let navigate = useNavigate()

    const handleConfirmClose = () => {
        setConfirmShow(false);
        setOrderConfirmed(true);
        let path = 'https://voulutora-backend.herokuapp.com/orders/changestatus/' + props.order.id +"?status=1"
        axios.put(path)
        .then(response => {
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        if(props.order.order_status != 0) {
            setOrderConfirmed(true);
        }
    },[])

    const handleStatusButton = () => {
        //navigate("/order_status", {state: {orderInfo: props.order}})
    }

    const handleConfirmShow = () => setConfirmShow(true);

    const handleCancelClose = () => setCancelShow(false);
    const handleCancelShow = () => setCancelShow(true);

    if(!orderConfirmed) {
        return(
            
            <div className={styles.cardContainer}>
                <Card>
                    <Card.Body>
                        <Card.Title>Order ID: {props.order.id} </Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                            <p>Order:</p>
                            {props.order.items.map(item => <p>{item.amount} x {item.item_name}</p>)}
                            <p>Comments: {props.order.order_comment}</p>
                            </Col>
                            <Col>
                            <p>Total price: {props.order.total_price} €</p>
                            <Button onClick={handleConfirmShow} size="lg" variant="success" className="me-3">
                                Confirm
                            </Button>
                            <Button onClick={handleCancelShow} size="lg" variant="danger">
                                Cancel
                            </Button>
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
                                    <Form.Select >
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
                                    <Form.Select >
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
                                    <Button onClick={handleConfirmClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal 
                            show={CancelShow} 
                            onHide={() => setCancelShow(false)} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Enter cancelation reason: </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control as="textarea"/>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handleCancelClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )

    } else {
        return(
            
            <div className={styles.cardContainer}>
                <Card>
                    <Card.Body>
                        <Card.Title>Order ID: {props.order.id} </Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                            <p>Order:</p>
                            {props.order.items.map(item => <p>{item.amount} x {item.item_name}</p>)}
                            <p>Comments: {props.order.order_comment}</p>
                            </Col>
                            <Col>
                            <p>Total price: {props.order.total_price} €</p>
                            <Button onClick={handleStatusButton} size="lg" className="me-3">
                                Status
                            </Button>
                            </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )
        
    }
}