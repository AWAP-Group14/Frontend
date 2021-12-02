import React from "react";
import styles from './css_modules/BrowsePage.module.scss';
import NavigationBar from "../../page_components/customer/NavigationBar";
import RestaurantCard from '../../page_components/customer/RestaurantCard';
import Footer from '../../page_components/customer/Footer';
import { useState } from "react";
import PageFiller from "../../page_components/shared/PageFiller";

import { Container, Row, Col, FormControl } from "react-bootstrap";


export default function BrowsePage(props) 
{
    const [searchTerm, setSearchTerm] = useState('')

    {props.restaurants.map((val,key)=> {
        return val.restaurant_name
    })}
    
    return(
        <div>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <div className={styles.filterSection}>
            <Container>
                <h1 className={styles.headerText}>Browse all of our restaurants!</h1>
                <Row className="mt-5">
                    <Col xs={12} sm={12} md={4} lg={5} xl={4}>
                        <h3 className={styles.headerText}>Filter from all restaurants:</h3>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={7} xl={4} className="justify-content-start">
                        <FormControl 
                            type="text" 
                            placeholder="Search restaurants" 
                            className="me-2" 
                            aria-label="Search"
                            onChange={(event =>{
                                setSearchTerm(event.target.value)
                            })}
                        />
                    </Col>
                </Row> 
            </Container>
            </div>

            <Container className="mt-3">
                <Row className="g-3">
                {
                    props.restaurants.filter((val)=>{

                        if (searchTerm == "") {
                            return val
                        }

                        else if (val.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }

                    }).map(restaurant => <RestaurantCard key={restaurant.restaurant_name} {...restaurant} /> )
                }
                </Row>
            </Container>
            <PageFiller fill={"200px"}/>
            <Footer jwt={props.jwt}/>
        </div>
    )
  }
  
