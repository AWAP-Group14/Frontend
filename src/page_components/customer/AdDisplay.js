import React from "react";
import styles from './css_modules/AdDisplay.module.scss';

import { Carousel } from "react-bootstrap";

// TODO: Make the advert more interactive and implement an image service

export default function AdDisplay(props)
{
    return (  

        <Carousel>
            <Carousel.Item interval={4000}>
                <img
                    className={styles.carouselImage}
                    src="https://cdn.discordapp.com/attachments/908694823559634965/908698595669184552/IMG_20211104_130553.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>Delivering only the best of food!</h3>
                <p>"This food is so good, highly recommended!" - Hungry Person</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
                <img
                    className={styles.carouselImage}
                    src="https://cdn.discordapp.com/attachments/908694823559634965/915602687427489812/IMG_20211201_152923.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Money back guarantee</h3>
                <p>Never received your order? Get a full refund from us!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
                <img
                    className={styles.carouselImage}
                    src="https://cdn.discordapp.com/attachments/908694823559634965/908697819697786900/IMG_20211111_155440.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Holiday sale!</h3>
                <p>Find the best deals for this holiday from us!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
    )
}