import React, {useEffect, useState} from 'react';
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import ShoppingCartItemCard from '../../page_components/customer/ShoppingCartItemCard'
import styles from "./css_modules/ShoppingCartPage.module.scss"
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Link, useNavigate } from "react-router-dom";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import PageFiller from '../../page_components/shared/PageFiller';

export default function ShoppingCartPage(props) 
{
    axios.defaults.headers.common = {'Authorization': `bearer ${props.jwt}`}
    let navigate = useNavigate()
    const [restaurantName, setRestaurantName] = useState("")
    const [price, setPrice] = useState(0)
    const [cartItems, setCartItems] = useState([
        {id: "", item_name: "", item_image: "", item_description: "", item_price: 0, amount: 0, menu_id: "" },{}
    ])
    const [isEmpty, setIsEmpty] = useState(true)
    const [restaurantInfo, setRestaurantInfo] = useState({restaurant_address: "", restaurant_operating_hours: []})
    const [comment, setComment] = useState("")
    var itemArray = []
    const createItemArray = (data) => {
        data.forEach(item => { itemArray.push({
            id: item.id, item_name: item.item_name, item_image: item.item_image, item_description: item.item_description, item_price: item.item_price, amount: item.amount, menu_id: item.menu_id
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
        var index = itemArray.findIndex(item => item.id == itemToUpdate)
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
        var index = itemArray.findIndex(item => item.id === itemToDelete)
        itemArray[index].amount += 0
        itemArray.splice(index, 1)
        var tempPrice = price
        if(itemArray.length == 0) {
            setIsEmpty(true)
            setPrice(0)
            tempPrice = 0
        }
        
        console.log(itemArray)
        setCartItems(itemArray)

        const decodedToken = jwt.decode(props.jwt)
        if(decodedToken != undefined) {
            let path = 'https://voulutora-backend.herokuapp.com/orders/shoppingCart/' + decodedToken.userId
            axios.put(path, {
                items: cartItems,
                totalPrice: tempPrice
            })
            .then(response => {
                
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            console.log("user need to log in")
        }
    }

    
    const handleCommentChange = (event) => {
        setComment(event.target.value)
      };

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
                console.log(price);
                navigate( "/payment", {state: {price: price, restaurantName: restaurantName, comment: comment }})
            })
            .catch(err => {
                console.log(cartItems)
                console.log(err);
            });
        } else {
            console.log("user need to log in")
        }
        props.setPrice(price);
        
      };
        
    useEffect( () => {
        const decodedToken = jwt.decode(props.jwt)
        if(decodedToken != undefined) {
            let path = 'https://voulutora-backend.herokuapp.com/orders/shoppingCart/' + decodedToken.userId
            axios.get(path)
            .then(response => {
                if(response.data.items.length != 0) {
                    setIsEmpty(false)
                }
                setRestaurantName(response.data.restaurantName)
                setPrice(response.data.totalPrice)
                setCartItems(createItemArray(response.data.items))
                let otherPath = 'https://voulutora-backend.herokuapp.com/restaurants/' + response.data.restaurantName + "/information"
                axios.get(otherPath)
                .then(res => {
                    console.log(res.data)
                    setRestaurantInfo({restaurant_address: res.data[0].restaurant_address, restaurant_operating_hours: res.data[0].restaurant_operating_hours.split(";")})
                })
                .catch(err => {
                    console.log(err);
                })
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
                <Container>
                    <div className="mt-4" style={{textAlign:"center"}}>
                        <h3>Your Shopping cart is currently empty!</h3>
                        <p>Go browse some of our restaurants and add new items to the shopping cart.</p>
                    </div>
                </Container>
                
                <PageFiller/>
                <Footer />
            </div>
        )
    } else {
        return(
            <div >
                <NavigationBar jwt={props.jwt} logout={props.logout}/>


                    <Container fluid className="mt-3 mb-3">
                        <Row>
                            <Col xs={12} xl={3}>
                                <div className="">
                                    <h1>Your order at {restaurantName}</h1>
                                    <p>{restaurantInfo.restaurant_address}</p>
                                    {restaurantInfo.restaurant_operating_hours.map((line) => <p>{line}</p>)}
                                </div>
                            </Col>

                            <Col xs={12} sm={8} xl={6}>
                                <Row className="g-3">
                                    {cartItems.map((item) => <ShoppingCartItemCard item = {item} updatePrice= {updatePrice} updateAmount={updateAmount} deleteItem= {deleteItem}/>)}
                                </Row>
                            </Col>

                            <Col xs={12} sm={4} xl={3} style={{textAlign:'right'}}>

                                <div className={styles.priceCol}>
                                    <h1>Total: {price} ???</h1>
                                    <h1>Delivery: Free</h1>
                                </div>

                                <Form className="" onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Comment to restaurant:</Form.Label>
                                        <Form.Control className="ms-auto mb-2" as="textarea" placeholder="allergies, spice level, etc" onChange={handleCommentChange}/>
                                    </Form.Group>
                                    <Button type="submit">Proceed to payment</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>

                <PageFiller/>
                <Footer />
            </div>
        )
    }
  }