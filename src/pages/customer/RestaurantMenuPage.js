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
import { Card } from "react-bootstrap";



export default function RestaurantMenuPage(props) 
{
    return(        
        <div className={styles.root}>
            <NavigationBar/>

            <div className={styles.restaurantHeader}>
                    <img className={styles.restaurantHeaderImage} src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg"></img>
                </div>

            <Container fluid={true} className="">

                <Row className="g-10">

                    <Col xs={{span: 6, order: 2}} sm={3} md={3} lg={3} xl={2} className="">
                        <RestaurantMenuCategories/>
                    
                    </Col>

                    <Col xs={{span: 6, order: 3}} sm={6} md={6} lg={6} xl={8} className="">
                        <Row className="g-2">
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
                        </Row>
                    </Col>

                    <Col xs={{span: 12, order: 1}} sm={3} md={3} lg={3} xl={2}  className="">
                        <RestaurantInfoBox/>
                    </Col>

                </Row>

            </Container>
            <Footer/>
        </div>
    )
  }
  

