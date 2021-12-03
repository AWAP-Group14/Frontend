import React from "react";
import {Card, Button, Form, Modal, Col, Row, ButtonGroup  } from "react-bootstrap";
import { useState } from "react";
import styles from './css_modules/OrderCard.module.scss'

export default function OrderCard(props) 
{
    const [ConfirmShow, setConfirmShow] = useState(false);
    const [CancelShow, setCancelShow] = useState(false);


    const handleConfirmClose = () => setConfirmShow(false);
    const handleConfirmShow = () => setConfirmShow(true);

    const handleCancelClose = () => setCancelShow(false);
    const handleCancelShow = () => setCancelShow(true);

    return(
        <div className={styles.cardContainer}>
            <Card>
                <Card.Body>
                    <Card.Title>Order {props.orderId} </Card.Title>
                    <Card.Text>
                        <Row>
                        <Col>
                        <p>Customer: {props.customerName}</p>
                        <p>Order: {props.DishName} </p>
                        <p>Comments: {props.comment}</p>
                        </Col>
                        <Col>
                        <p>Total price: {props.totalPrice} €</p>
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
  }