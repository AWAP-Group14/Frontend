import React from "react";
import styles from './css_modules/FeaturedRestaurants.module.scss';
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

import { Container,Row,Col,Button } from "react-bootstrap";

export default function FeaturedRestaurants(props)
{

    return (
    <div className={styles.root}>
        <Container className={styles.sectionHeader}>
                <div className="d-flex justify-content-start my-2">
                    <h1 className={styles.headerText}>Featured Restaurants</h1>
                </div>
                <div className="d-flex justify-content-end ms-auto">
                    <Link to="/browse" style={{textDecoration: 'inherit',color:'inherit'}}>
                        <Button variant="warning">Browse all</Button>
                    </Link>
                </div>
        </Container>
        <Container >
            <Row className="g-3">
                {props.restaurants.slice(0,4).map(restaurant => 
                <RestaurantCard 
                key={restaurant.restaurant_name} 
                {...restaurant} 
                /> )}
            </Row>

        </Container>        
    </div>
    )
}

