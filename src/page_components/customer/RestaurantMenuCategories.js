import React from "react";
import styles from './css_modules/RestaurantMenuCategories.module.css'
import  Jwt  from "jsonwebtoken";

import { Button } from "react-bootstrap";


export default function RestaurantMenuCategories(props) 
{

    // Checks from the passed jwt token wheter user is manager
    const isManager = function(){
        let userIsManager = false;

        const decodedToken = Jwt.decode(props.jwt);

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
        if (isManager()) {
            return(     

                <div className="">
                    <p>{props.category} <Button variant="danger">Delete</Button></p>
                </div>
            )
        }

        // If user is customer show default features
        else{
            return(     

                <div className="">
                    <p>{props.category}</p>
                </div>
            )
        }
 
  }
  

