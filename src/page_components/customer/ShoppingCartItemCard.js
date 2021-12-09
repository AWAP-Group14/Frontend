import React, {useEffect, useState} from 'react';
import styles from './css_modules/ShoppingCartItemCard.module.scss'

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


export default function ShoppingCartItemCard(props) 
{
    let isManager = true;
    let params = useParams();
    const alert = useAlert()
    var [amount, setAmount] = useState(0)

    const plus = () => {
        //setAmount(amount + 1)
        props.updateAmount(props.item.id, true)
        props.updatePrice(props.item.item_price, true)
    }

    const minus = () => {
        if(amount > 1) {
            //setAmount(amount -1)
            props.updateAmount(props.item.id,false)
            props.updatePrice(props.item.item_price, false)
        }
        
    }

    const deleteItem = () => {
        props.deleteItem(props.item.id)
        props.updatePrice((props.item.item_price * props.item.amount), false)
    }

    useEffect( () => {
        setAmount(props.item.amount)

    }, [props]);


    // TODO: Add shoppingcart functionality

    return(      

        <Col >
            <Card className="ms-auto me-auto" style={{width:"300px",height:"450px"}}>
                <Card.Img className={styles.cardImage} src={props.item.item_image} />
                    <Card.Body className="pt-0">
                        <Row>
                            <Col xs={12}>
                                
                                    <Card.Title>{props.item.item_name}</Card.Title>
                                    <Card.Text>{props.item.item_description}</Card.Text>
                                
                                
                            </Col> 

    
                            <Col xs={12}>
                                <Card.Title className="">{props.item.item_price} €</Card.Title>
                                <div className="d-flex">
                                    <Button className="" style={{width:"50%"}} variant="danger" onClick= {deleteItem}>Delete</Button>                            
                                    <div className="d-flex ms-auto">
                                        <Button style={{width:"35px",textAlign:"center"}} className="me-1" onClick= {minus}>-</Button>
                                        <Card.Text className="my-auto me-1">{amount}</Card.Text>
                                        <Button style={{width:"35px",textAlign:"center"}} className="" onClick={plus}>+</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>

            </Card>
            </Col>
    )
  }
  

