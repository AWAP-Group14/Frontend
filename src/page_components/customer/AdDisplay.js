import React from "react";
import styles from './css_modules/AdDisplay.module.css';

// TODO: Make the advert more interactive and implement an image service

export default function AdDisplay(props)
{
    return (
    <div className={styles.root}>
        <div className={styles.imageContainer}>
            <img className={styles.currentImage} src="https://cdn.discordapp.com/attachments/908694823559634965/908698595669184552/IMG_20211104_130553.jpg"></img>
        </div>
    </div>
    )
}