import React from "react";
import styles from './css_modules/RestaurantMenuCategories.module.css'
import RestaurantItemCard from "../../page_components/shared/RestaurantItemCard";
import { jwt } from "jsonwebtoken";

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



export default function RestaurantItems(props) 
{


        // Checks from the passed jwt token wheter user is manager
        const isManager = function(){
            let userIsManager = false;
    
            const decodedToken = jwt.decode(props.jwt);
    
            if (decodedToken == null) {
                return false;
            }
    
            if (decodedToken.isManager == true) {
                return true;
            }
    
            else{
                return false;
            }
        }

    // If user is manager show advanced fetures
    if (isManager) {
        return(        
            <Row className="g-4">
                <div><h3>{props.category}</h3></div>
                {props.items.map((item) => <RestaurantItemCard jwt= {props.jwt} item = {item}/>)}
            </Row>
        )
    }
    // If user is customer show default features
    else{
        return(        
            <Row className="g-4">
                <div><h3>{props.category}</h3></div>
                {props.items.map((item) => <RestaurantItemCard jwt= {props.jwt} item = {item}/>)}
            </Row>
        )
    }
  }
  

