import React from "react";
import styles from './css_modules/RestaurantMenuPage.module.scss'

import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import RestaurantInfoBox from "../../page_components/customer/RestaurantInfoBox";
import RestaurantMenuCategories from "../../page_components/customer/RestaurantMenuCategories";
import RestaurantItemCard from "../../page_components/shared/RestaurantItemCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function RestaurantMenuPage(props) 
{
    return(        
        <div className={styles.root}>
            <NavigationBar/>

            <div className={styles.restaurantHeader}>
                    <img className={styles.restaurantHeaderImage} src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg"></img>
                </div>

            <Container className={styles.restaurantContent}>
                <Row className="g-20">



                


                <Col className={styles.restaurantCategories}>
                    <RestaurantMenuCategories/>
                   
                </Col>

                <Col className={styles.restaurantMenuCards}>
                    <div><h3>Category Name 1</h3></div>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <div><h3>Category Name 2</h3></div>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <div><h3>Category Name 3</h3></div>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>

                </Col>

                <Col className={styles.restaurantInfo}>
                    <RestaurantInfoBox/>
                </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
  }
  

