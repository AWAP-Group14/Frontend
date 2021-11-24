import React from "react";
import styles from './css_modules/Footer.module.css';

export default function Footer ()
{
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerLogo}>LOGO</p>
            <div><p>Contact us:</p>
            <p>Yliopistokatu 9, Oulu</p>
            <p>1234 4567 789</p>
            <p>contact@voulutora.com</p></div>
            <button className={styles.ManagerPage}>Restaurant mangement page</button>
        </div>
    )

}