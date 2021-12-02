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


export default function RestaurantItemCard(props) 
{
    let isManager = true;
    let params = useParams();


    // TODO: Add shoppingcart functionality


    const addToCart = () => {
        const decodedToken = jwt.decode(props.jwt)
        if(decodedToken != undefined) {
            const path = 'https://voulutora-backend.herokuapp.com/order/shoppingCart/' + decodedToken.userId 
            axios.post('https://voulutora-backend.herokuapp.com/order/shoppingCart', {
                restaurantName: params.restaurantName,
                //Not yet available in the item 
                itemId: props.item.itemId,
                amount: 1
              })
            .then(response => {
              console.log(response)
            })
            .catch(err => {
                console.log(err)
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
                                        <Card.Text>L,G,V</Card.Text>
                                    </Col>

                                    <Col>
                                        <div className={styles.alignContentRight}>
                                            <div className="">
                                                {/* <Button variant="danger">Delete</Button> */}
                                            </div>
                                            <div className="">
                                                <Card.Title>{props.item.price} $</Card.Title>
                                                <Button onClick={addToCart()}>Add to cart</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                           

                    </Card.Body>

            </Card>
            </Col>
    )
  }
  

