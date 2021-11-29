import React from "react";
import styles from './css_modules/RestaurantItemCard.module.scss'

import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function RestaurantItemCard(props) 
{
    let isManager = true;


    // TODO: Add backend functionality
    // TODO: Add manager functionality
    // TODO: Add shoppingcart functionality
    return(     
        <Col xs={12} md={12} lg={12} xl={6}>   
        <Card className="">
            <Card.Body className="">
                <Container>
                    <Row>
                        <Col className="">
                            <Card.Img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg"></Card.Img>
                        </Col>
                        <Col className="">
                            
                                <Row>
                                    <Col className="">
                                        <Card.Title>Item name</Card.Title>
                                        <Card.Text>Item description</Card.Text>
                                        <Card.Text>L,G,V</Card.Text>
                                    </Col>

                                    <Col className="">
                                        <div className="">
                                            <button>Delete</button>
                                        </div>
                                        <div className="">
                                            <p>XXX€</p>
                                            <button>Add to cart</button>
                                        </div>

                                    </Col>
                                </Row>
                           
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        </Col>
    )
  }
  

