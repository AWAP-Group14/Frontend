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
import { Image } from "react-bootstrap";



export default function RestaurantMenuPage(props) 
{
    return(        
        <div className={styles.root}>
            <NavigationBar/>

            <div className={styles.restaurantHeader}>
                <div className={styles.restaurantBannerFader}>
                    <Image className={styles.restaurantHeaderImage} src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg"/>
                </div>
                <div className={styles.restaurantInfo}>
                    <RestaurantInfoBox/>
                </div>
            </div>



            <Container fluid={true} className="pt-3">

                <Row className="g-10">

                    <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                       <div  className={styles.sidebarSticky}>
                            <RestaurantMenuCategories/>
                        </div>
                    </Col>

                    <Col xs={6} sm={7} md={8} lg={9} xl={10}>
                        <Row className="g-4">
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

                </Row>

            </Container>
            <Footer/>
        </div>
    )
  }
  

