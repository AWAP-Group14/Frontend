import React from "react";
import { useState } from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/LandingPageManager.module.scss';
import OrderCard from '../../page_components/manager/OrderCard';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function ManagerDashboardPage(props)
{
    return(
        <div className={styles.App}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <h1>Orders</h1>
            <OrderCard/>
            <div className={styles.btnCont}>
            <Button>Order history</Button>
            <Link to="/editMenu"><Button>Edit menu</Button></Link>
            </div>
            <Footer/>
        </div>
    )
  }
  
  