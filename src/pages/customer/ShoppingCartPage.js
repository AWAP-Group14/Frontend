import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import RestaurantItemCard from '../../page_components/shared/RestaurantItemCard'
import { Form, Button } from "react-bootstrap";
import styles from "./css_modules/ShoppingCartPage.module.scss"

export default function ShoppingCartPage(props) 
{
    return(
        <div >
            <NavigationBar/>
            <div className={styles.container}>
                <div className={styles.headerCol}>
                    <h1>Your order</h1>
                </div>
                <div className={styles.bodyCol}>
                    <div > resaturant item card </div>
                    <Form>
                        <Form.Group>
                          <Form.Label>Comment to restaurant:</Form.Label>
                          <Form.Control type="text" placeholder="allergies, spice level, etc" />
                        </Form.Group>
                        <Button type="submit">Send</Button>
                    </Form>
                </div>
                <div className={styles.priceCol}>
                    <h1>Total: {props.totalPrice} €</h1>
                    <h1>Delivery: Free</h1>
                </div>
            </div>
            <Button >Back to menu</Button>
            <Button type="submit">Pay</Button>
            <Footer />
        </div>
    )
  }