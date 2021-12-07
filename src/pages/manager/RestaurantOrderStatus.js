import React from 'react';
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import { Row, Button, Col, Modal, Form } from "react-bootstrap";
import styles from './css_modules/RestaurantOrderStatus.module.scss';
import { useState } from "react";

export default function RestaurantOrderStatus(props)
{
    const [CancelShow, setCancelShow] = useState(false);
    const handleCancelClose = () => setCancelShow(false);
    const handleCancelShow = () => setCancelShow(true);

    return (
        <div>
        <NavigationBar/>

           <div>
               <Row>
                   <Col > 
                   <div className={styles.infoColumn}>
               <p>Order: {props.orderId}</p>
               <p>Ordered items:</p>
                     <div className="ms-3">
                       
                     </div>
                <p>Comment: </p>
                <p>Customer: </p>
                <p>{props.customer_name}</p>
                <p>{props.customer_phone}</p>
                </div>
                </Col>
                <Col >
                <div className={styles.btnColumn} >
                    <h2>Order status:</h2>
                    <Button size="lg" variant="outline-success">Confirm</Button>
                    <Button size="lg" variant="outline-success">Cooking in progress</Button>
                    <Button size="lg" variant="outline-success">Ready for delivery</Button>
                    <Button size="lg" variant="outline-success">Sent to customer</Button>
                    <Button size="lg" variant="outline-success">Delivered</Button>
                </div>
                <div className={styles.cancelBtn}>
                    <Button size="lg" variant="danger" onClick={handleCancelShow}>Cancel</Button>
                </div>
                </Col>
                </Row>
                
                
                    
                
                
           </div>

        <Footer/>

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
        </div>
    )
}