import React from "react";
import styles from './css_modules/RestaurantCard.module.scss';

import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RestaurantCard(props)
{
    // Parse price level
    let price;

    if (props.restaurant_price_level == 1) {
        price = "€"
    }

    if (props.restaurant_price_level == 2) {
        price = "€€"
    }

    if (props.restaurant_price_level == 3) {
        price = "€€€"
    }

    if (props.restaurant_price_level == 4) {
        price = "€€€€"
    }
        

        return (
            <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                <Link to={'/restaurant/' + props.restaurant_name} style={{textDecoration: 'inherit',color:'inherit'}}>
                <Card classname={styles.cardCustom}>
                    <Card.Img src={props.restaurant_image} className={styles.cardImage}/>
                        <Card.Body className="g-0">
                                
                            <Card.Title>{props.restaurant_name}</Card.Title>
                            <Card.Text>{props.restaurant_type}</Card.Text>
                            <Card.Text>{price}</Card.Text>
                            <Card.Text>Delivery: XXX€</Card.Text>

                        </Card.Body>
                </Card>
                </Link>
            </Col>
        )
    

}
