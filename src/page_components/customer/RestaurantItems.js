import React from "react";
import styles from './css_modules/RestaurantMenuCategories.module.css'
import RestaurantItemCard from "../../page_components/shared/RestaurantItemCard";
import Row from 'react-bootstrap/Row';

export default function RestaurantItems(props) 
{
    console.log(props.items)
    return(        
        <Row className="g-4">
            <div><h3>{props.category}</h3></div>
            {props.items.map((item) => <RestaurantItemCard jwt= {props.jwt} item = {item}/>)}
        </Row>
    )
  }
  

