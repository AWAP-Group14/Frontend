import {React, useState } from "react";
import { Link } from "react-router-dom";
import styles from './css_modules/RestaurantItemCard.module.scss'

import { Card, Modal } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
import axios from 'axios'
import Jwt from 'jsonwebtoken';
import { useParams } from "react-router-dom";
import { useAlert } from 'react-alert'
import { useLayoutEffect } from "react";


export default function RestaurantItemCard(props) 
{
    let params = useParams();
    const alert = useAlert()

    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}

    // TODO: Add shoppingcart functionality 

    const addToCart = () => {
        console.log("Button clicked")
        console.log(props.item.itemId)
        console.log(props.jwt);
        const decodedToken = Jwt.decode(props.jwt)
        console.log(decodedToken);
        if(decodedToken != undefined) {
            const path = 'https://voulutora-backend.herokuapp.com/orders/shoppingCart/' + decodedToken.userId 
            console.log(decodedToken.userId)
            axios.post(path, {
                restaurantName: params.restaurantName,
                itemId: props.item.itemId,
                amount: 1
              })
            .then(response => {
              console.log(response)
              alert.show(props.item.name + " has been added to your shopping cart")
              
            })
            .catch(err => {
                console.log(err.response)
            })
        } else {
            console.log("User need to sign up")
            handleShow();
        }
    }

    const deleteItem = () => {
        const decodedToken = Jwt.decode(props.jwt)
        let path = "https://voulutora-backend.herokuapp.com/restaurants/"+decodedToken.restaurantInfo+"/item/"+props.item.itemId
        console.log(path+" delete item path");
        axios.delete(path)
        .then((response) => {
            console.log(response);
            console.log("item deleted");
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }
    

    // Checks from the passed jwt token wheter user is manager
    const isManager = function(){
        let userIsManager = false;

        const decodedToken = Jwt.decode(props.jwt);

        if (decodedToken == null) {
            return false;
        }

        if (decodedToken.isManager == true) {
            return true;
        }

        else{
            return false;
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (isManager()) {
        return(     
                
            <Col sm={12} lg={6} xl={4}>
                <Card className="ms-auto me-auto" style={{width:"300px",height:"470px"}}>
                    <Card.Img className={styles.cardImage} src={props.item.image}/>
                        <Card.Body className="g-0">
                                
                                    <Row>

                                    <Col xs={12}>
                                            <Card.Title>{props.item.name}</Card.Title>
                                            <Card.Text>{props.item.description}</Card.Text>
                                            {/* <Card.Text>L,G,V</Card.Text> */}
                                        </Col>

                                        <Col className="mt-atuo" xs={12}>
                                            <div className="">
                                                <div className="">
                                                    {/* <Button variant="danger">Delete</Button> */}
                                                </div>
                                                <div className="">
                                                    <Card.Title>{props.item.price} €</Card.Title>
                                                    <Button style={{width:"100%"}} className="" variant="danger" onClick={deleteItem}>Delete</Button>
                                                </div>
                                            </div>
                                        </Col>


                                    </Row>
                               
    
                        </Card.Body>
    
                </Card>
                </Col>
        )
    }

    // Show regular item card if user is not a manager
    else{
        return(     

            <Col sm={12} lg={6} xl={4}>
                <Card className="ms-auto me-auto" style={{width:"300px",height:"470px"}}>
                    <Card.Img className={styles.cardImage} src={props.item.image} />
                        <Card.Body className="g-0">
                                
                                    <Row>
                                    <Col xs={12}>
                                            <Card.Title>{props.item.name}</Card.Title>
                                            <Card.Text>{props.item.description}</Card.Text>
                                        </Col>

                                        <Col className="mt-atuo" xs={12}>
                                            <div className="">
                                                <div className="">
                                                    <Card.Title>{props.item.price} €</Card.Title>
                                                    <Button style={{width:"100%"}} onClick={addToCart}>Add to cart</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                               
    
                        </Card.Body>
    
                </Card>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>You need to sign in to do that!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You need to first sign in or create a new account to add items to your shopping cart.</Modal.Body>
                        <Modal.Footer>
                        <Link to="/signup" style={{textDecoration: 'none'}}>
                            <Button variant="primary" onClick={handleClose}>
                                    Sign Up
                            </Button>
                        </Link>
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <Button variant="success" onClick={handleClose}>
                                    Sign In
                            </Button>
                        </Link>
                        </Modal.Footer>
                     </Modal>
                </Col>
        )
    }


   
  }
  

