import React from "react";
import { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import styles from './css_modules/LandingPageManager.module.css';
import OrderCard from '../../page_components/manager/OrderCard'

export default function LandingPageManager(props)
{
    return(
        <div className={styles.App}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <p>Orders</p>
            <OrderCard/>
        </div>
    )
  }
  
  