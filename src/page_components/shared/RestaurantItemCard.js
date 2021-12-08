import React from "react";
import styles from './css_modules/RestaurantItemCard.module.scss'

import { Card } from "react-bootstrap";
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

    useLayoutEffect( () => {
      

    }, []);

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
            alert.show("Sign in to add items to shopping cart!")
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

    if (isManager()) {
        return(     
                
            <Col sm={12} lg={6} xl={4}>
                <Card classname="px-0">
                    <Card.Img src={props.item.image} width="150" height="250" />
                        <Card.Body className="g-0">
                                
                                    <Row>
                                        <Col className="">
                                            <Card.Title>{props.item.name}</Card.Title>
                                            <Card.Text>{props.item.description}</Card.Text>
                                            {/* <Card.Text>L,G,V</Card.Text> */}
                                        </Col>
    
                                        <Col>
                                            <div className={styles.alignContentRight}>
                                                <div className="">
                                                    {/* <Button variant="danger">Delete</Button> */}
                                                </div>
                                                <div className="">
                                                    <Card.Title>{props.item.price} €</Card.Title>
                                                    <Button variant="danger" onClick={deleteItem}>Delete</Button>
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
                <Card classname="px-0">
                    <Card.Img src={props.item.image} width="150" height="250" />
                        <Card.Body className="g-0">
                                
                                    <Row>
                                        <Col className="">
                                            <Card.Title>{props.item.name}</Card.Title>
                                            <Card.Text>{props.item.description}</Card.Text>
                                            {/* <Card.Text>L,G,V</Card.Text> */}
                                        </Col>
    
                                        <Col>
                                            <div className={styles.alignContentRight}>
                                                <div className="">
                                                    {/* <Button variant="danger">Delete</Button> */}
                                                </div>
                                                <div className="">
                                                    <Card.Title>{props.item.price} €</Card.Title>
                                                    <Button onClick={addToCart}>Add to cart</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                               
    
                        </Card.Body>
    
                </Card>
                </Col>
        )
    }


   
  }
  

