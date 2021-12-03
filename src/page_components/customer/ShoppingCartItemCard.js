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
        console.log("ID" +props.item.id);

    }, [props]);


    // TODO: Add shoppingcart functionality

    return(     

        <Col >
            <Card classname="px-0">
                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg" />
                    <Card.Body className="g-0">
                            
                                <Row>
                                    <Col className="">
                                        <Card.Title>{props.item.item_name}</Card.Title>
                                        <Card.Text>{props.item.item_description}</Card.Text>
                                        {/* <Card.Text>L,G,V</Card.Text> */}
                                    </Col>

                                    <Col>
                                        <div className={styles.alignContentRight}>
                                            <div className="">
                                                <Button variant="danger" onClick= {deleteItem}>Delete</Button>
                                            </div>
                                            <div className="">
                                                <Card.Title>{props.item.item_price} $</Card.Title>
                                                <Button onClick={plus}>+</Button>
                                                <Card.Text>{amount}</Card.Text>
                                                <Button onClick= {minus}>-</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                           

                    </Card.Body>

            </Card>
            </Col>
    )
  }
  

