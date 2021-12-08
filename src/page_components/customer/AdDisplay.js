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
                    src="https://res.cloudinary.com/dmpgjexg4/image/upload/v1638953937/pexels-jonathan-borba-2983101_oqzlhj.jpg"
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
                    src="https://res.cloudinary.com/dmpgjexg4/image/upload/v1638954076/pexels-pixabay-248444_bk1wfq.jpg"
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
                    src="https://res.cloudinary.com/dmpgjexg4/image/upload/v1638953952/pexels-laura-james-6102548_nosbjm.jpg"
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