import React from "react";
import {Card, Button, Form, Modal,   } from "react-bootstrap";
import { useState } from "react";
export default function OrderCard(props) 
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div >
            <Card>
                <Card.Body>
                    <Card.Title>Order {props.orderId}</Card.Title>
                    <Card.Text>
                        <p>Customer: {props.customerName}</p>
                        <p>Order: {props.DishName} </p>
                        <p>Comments: {props.comment}</p>
                        <p>Total price: {props.totalPrice}</p>
                        <Button onClick={handleShow}>
                            Confirm
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Enter approximate delivery time:</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                <Form.Select title="00">
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
                                <Form.Select title="00">
                                    <option>00</option>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                                </Form.Select>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleClose}>
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