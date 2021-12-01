import React from "react";
import styles from './css_modules/Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer (props)
{
    if (props.jwt == null) {
        
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerLogo}>LOGO</p>
            <div><p>Contact us:</p>
            <p>Yliopistokatu 9, Oulu</p>
            <p>1234 4567 789</p>
            <p>contact@voulutora.com</p></div>
            <Link to="/manager/login"><button className={styles.ManagerPage}>Restaurant mangement page</button></Link>
        </div>
    )}

    if (props.jwt != null) {
        
        return (
            <div className={styles.footerContainer}>
                <p className={styles.footerLogo}>LOGO</p>
                <div><p>Contact us:</p>
                <p>Yliopistokatu 9, Oulu</p>
                <p>1234 4567 789</p>
                <p>contact@voulutora.com</p></div>
            </div>
        )}

}