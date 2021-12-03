import React, {useState, useEffect} from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import styles from "./css_modules/Payment.module.scss"
import {Link, useLocation, useNavigate} from "react-router-dom";
import jwt from 'jsonwebtoken';

export default function Payment(props) 
{
    //Delivery type: 1=delivery, 2=pickup
    let location = useLocation()
    let navigate = useNavigate()
    const [state, setState] = useState({
        address: "",
        newAddress: "",
        text: "Check your delivery adress:"
    });
    const [restaurantAddress, setRestaurantAddress] = useState("");
    const [deliveryType, setDeliveryType] = useState(1);

    function handleClick(props){
        if(restaurantAddress != undefined) {
            setState({address: restaurantAddress, text: "Restaurant address:"})
            setDeliveryType(2)
        }
       
    }

    const handleInputChange = (event) => {
        setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
        setDeliveryType(1)
      };

    const handleChangeAddress= (props) => {
        if(state.newAddress != undefined) {
            setState({address: state.newAddress, text: "Check your delivery adress:"})
            setDeliveryType(1)
        }
        
    };

    const submitPayment= () => {
        console.log("the function is called");
        const decodedToken = jwt.decode(props.jwt)
        console.log(props.jwt)
        if(decodedToken != undefined) {
            axios.post('https://voulutora-backend.herokuapp.com/orders', {
                customer_id: decodedToken.userId, 
                order_status: 0,
                delivery_type: deliveryType,
                delivery_address: state.address,
                order_comment: location.state.comment,

            })
            .then(response => {
                console.log("This should navigate")
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log("User need to log in")
            console.log(decodedToken)
        }
        
    }

    useEffect(() => {
        const decodedToken = jwt.decode(props.jwt)
        console.log(props.jwt)
        if(decodedToken != undefined) {
            setState({address: decodedToken.userInfo.customer_address, text: "Check your delivery adress:"})
            let path = 'https://voulutora-backend.herokuapp.com/restaurants/' + location.state.restaurantName +'/address'
            axios.get(path)
            .then(response => {
                setRestaurantAddress(response.data[0].restaurant_address)
                console.log(location.state.comment)
                console.log(location.state.restaurantName)
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log("User need to log in")
        }
    },[])
    
    return(
        <div >
            <NavigationBar/>
            <div className={styles.TotalPrice}>
                    Total: {location.state.price} €
                </div>
            <div className={styles.container}>
                <div className={styles.Delivery}>
                
                <p>Delivery time: 30 minutes</p>
                <Button onClick={() => handleClick()} >
                    I will pick order myself
                </Button>
                
                <p>{state.text}</p>
                <p>{state.address}</p>
                <Form.Group>
                        <Form.Label>Deliver your order to another address</Form.Label>
                        <Form.Control type="text" placeholder="Other adress" name = "newAddress" value= {state.newAddress} onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleChangeAddress}>
                         Change address
                     </Button>
            </div>
            
            <div className={styles.PaymentForm}>
                <Form>
                    <Form.Group>
                        <Form.Label>Card Owner</Form.Label>
                        <Form.Control required type="text" placeholder="Card Owner" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control required type="number" placeholder="Card Number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control required type="text" placeholder="MM/YY" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="number" placeholder="XXX" />
                    </Form.Group>
                    <Button variant="primary" onClick={submitPayment}>
                         Change address
                     </Button>
                </Form>
            </div>
            </div>
            <Footer/>
            
        </div>
    )
  }
  

