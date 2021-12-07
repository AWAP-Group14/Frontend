import React from "react";
import { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import styles from './css_modules/ManagerDashboardPage.module.scss';
import OrderCard from '../../page_components/manager/OrderCard'

export default function ManagerDashboardPage(props)
{
    return(
        <div className={styles.App}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <p>Orders</p>
            <OrderCard/>
        </div>
    )
  }
  
  