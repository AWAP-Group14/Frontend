import React from "react";
import styles from './css_modules/RestaurantItemCard.module.scss'

import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";


export default function RestaurantItemCard(props) 
{
    let isManager = true;


    // TODO: Add backend functionality
    // TODO: Add manager functionality
    // TODO: Add shoppingcart functionality
    return(     

        <Col sm={12} lg={6} xl={4}>
            <Card classname="px-0">
                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg" />
                    <Card.Body className="g-0">
                            
                                <Row>
                                    <Col className="">
                                        <Card.Title>Item name</Card.Title>
                                        <Card.Text>Item description</Card.Text>
                                        <Card.Text>L,G,V</Card.Text>
                                    </Col>

                                    <Col>
                                        <div className={styles.alignContentRight}>
                                            <div className="">
                                                <Button variant="danger">Delete</Button>
                                            </div>
                                            <div className="">
                                                <Card.Title>XXX€</Card.Title>
                                                <Button>Add to cart</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                           

                    </Card.Body>

            </Card>
            </Col>
    )
  }
  

