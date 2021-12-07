import React from "react";
import styles from './css_modules/Footer.module.scss';
import { Link } from "react-router-dom";
import 'react-bootstrap';

import { FaRegCopyright } from "react-icons/fa";

export default function Footer (props)
{
    if (props.jwt == null) {
        
    return (
        <div className="fixed-bottom">
        <footer className={styles.footerContainer}>
            <p className={styles.footerLogo}>LOGO</p>
            <Link to="/manager/login"><button className={styles.ManagerPage}>Restaurant mangement page</button></Link>
        </footer>
        <div className={styles.footerCopyright}><FaRegCopyright/> Group 14 Adwanced Web Development Project 2021 OAMK</div>
        </div>
    )}

    if (props.jwt != null) {
        
        return (
            <footer className={styles.footerContainer}>
                <p className={styles.footerLogo}>LOGO</p>
                <div><p>Contact us:</p>
                <p>Yliopistokatu 9, Oulu</p>
                <p>1234 4567 789</p>
                <p>contact@voulutora.com</p></div>
            </footer>
        )}

}