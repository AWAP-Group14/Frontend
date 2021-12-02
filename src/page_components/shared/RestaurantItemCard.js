import React from "react";
import styles from './css_modules/RestaurantItemCard.module.scss'

import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
import axios from 'axios'
import jwt from 'jsonwebtoken';
import { useParams } from "react-router-dom";
import { useAlert } from 'react-alert'


export default function RestaurantItemCard(props) 
{
    let isManager = true;
    let params = useParams();
    const alert = useAlert()


    // TODO: Add shoppingcart functionality


    const addToCart = () => {
        console.log("Button clicked")
        console.log(props.item.itemId)
        console.log(props.jwt);
        const decodedToken = jwt.decode(props.jwt)
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
        }
    }

    return(     

        <Col sm={12} lg={6} xl={4}>
            <Card classname="px-0">
                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg" />
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
                                                <Card.Title>{props.item.price} $</Card.Title>
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
  

