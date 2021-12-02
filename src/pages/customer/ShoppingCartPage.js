import React, {useEffect, useState} from 'react';
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import ShoppingCartItemCard from '../../page_components/customer/ShoppingCartItemCard'
import { Form, Button } from "react-bootstrap";
import styles from "./css_modules/ShoppingCartPage.module.scss"
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default function ShoppingCartPage(props) 
{

    const [restaurantName, setRestaurantName] = useState("")
    const [price, setPrice] = useState(0)
    const [cartItems, setCartItems] = useState([
        {itemId: "", name: "", image: "", description: "", price: 0, amount: 0, menuId: "" },{}
    ])
    const [isEmpty, setIsEmpty] = useState(true)
    var itemArray = []
    const createItemArray = (data) => {
        data.forEach(item => { itemArray.push({
            itemId: item.id, name: item.item_name, image: item.item_image, description: item.item_description, price: item.item_price, amount: item.amount, menuId: item.menu_id
        })})
        return itemArray
    }

    const updatePrice = (itemPrice, add) => {
        if(add) {
            setPrice(price + itemPrice)
        } else {
            setPrice(price - itemPrice)
        }
    }
    const updateAmount = (itemToUpdate, add) => {
        itemArray = cartItems
        var index = itemArray.findIndex(item => item.itemId == itemToUpdate)
        if(add) {
            itemArray[index].amount += 1
            console.log( itemArray[index].amount)
        } else {
            itemArray[index].amount -= 1
            console.log( itemArray[index].amount)
        }
        setCartItems(itemArray)
    }

    const deleteItem = (itemToDelete) => {
        itemArray = cartItems
 
        var index = itemArray.findIndex(item => item.itemId === itemToDelete)
        itemArray[index].amount += 0
        itemArray.splice(index, 1)
        console.log(itemArray)
        setCartItems(itemArray)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const decodedToken = jwt.decode(props.jwt)
        if(decodedToken != undefined) {
            let path = 'https://voulutora-backend.herokuapp.com/orders/shoppingCart/' + decodedToken.userId
            axios.put(path, {
                items: cartItems,
                totalPrice: price
            })
            .then(response => {
                props.setPrice(price);
                window.location.replace("/payment")
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            console.log("user need to log in")
        }
        
      };
        
    useEffect( () => {
        const decodedToken = jwt.decode(props.jwt)
        if(decodedToken != undefined) {
            let path = 'https://voulutora-backend.herokuapp.com/orders/shoppingCart/' + decodedToken.userId
            axios.get(path)
            .then(response => {
                setIsEmpty(false)
                setRestaurantName(response.data.restaurantName)
                setPrice(response.data.totalPrice)
                setCartItems(createItemArray(response.data.items))
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log("User need to sign in");
        }
    }, []);

    
    if(isEmpty) {
        return(
            <div >
                <NavigationBar jwt={props.jwt} logout={props.logout}/>
                <h3>SHOPPING CART IS EMPTY</h3>
                <Footer />
            </div>
        )
    } else {
        return(
            <div >
                <NavigationBar jwt={props.jwt} logout={props.logout}/>
                <div className={styles.container}>
                    <div className={styles.headerCol}>
                        <h1>Your order at {restaurantName}</h1>
                    </div>
                    <div className={styles.bodyCol}>
                        <div >
                            {cartItems.map((item) => <ShoppingCartItemCard item = {item} updatePrice= {updatePrice} updateAmount={updateAmount} deleteItem= {deleteItem}/>)}
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                            <Form.Label>Comment to restaurant:</Form.Label>
                            <Form.Control type="text" placeholder="allergies, spice level, etc" />
                            </Form.Group>
                            <Button type="submit">Send</Button>
                        </Form>
                    </div>
                    <div className={styles.priceCol}>
                        <h1>Total: {price} €</h1>
                        <h1>Delivery: Free</h1>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
  }