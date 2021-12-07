import React from "react";
import styles from './css_modules/NewMenuItemCard.module.scss'
import { jwt } from "jsonwebtoken";

import { Button, Row, Col, Card, Form, FormGroup } from "react-bootstrap";



export default function NewMenuItemCard(props) 
{



return(
    <Col sm={12} lg={6} xl={4}>
                <Card classname="px-0">
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg" />
                        <Card.Body className="g-0">
                                
                                    <Row>
                                        <Col xs={6}>
                                            <Card.Title>
                                                    <Form.Group>
                                                        <Form.Control type="text" placeholder="Item name"></Form.Control>
                                                    </Form.Group>
                                                </Card.Title>
                                            <Card.Text>
                                            <Form.Group>
                                                        <Form.Control type="text" placeholder="Description"></Form.Control>
                                                    </Form.Group>
                                            </Card.Text>
                                            {/* <Card.Text>L,G,V</Card.Text> */}
                                        </Col>
    
                                        <Col xs={6}>
                                            <div className={styles.alignContentRight}>
                                                <div className="">
                                                    {/* <Button variant="danger">Delete</Button> */}
                                                </div>
                                                <div className="">
                                                    <Card.Title>
                                                    <Form.Group>
                                                        <Form.Control type="text" placeholder="Price (€)"></Form.Control>
                                                    </Form.Group>
                                                    </Card.Title>
                                                    <Button variant="success" onClick="" >Create</Button>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group controlId="formFileSm" className="mb-3">
                                                <Form.Label>Upload item image</Form.Label>
                                                <Form.Control type="file" size="sm" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                               
    
                        </Card.Body>
    
                </Card>
                </Col>
)
  }
  

