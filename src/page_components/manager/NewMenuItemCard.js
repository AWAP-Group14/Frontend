import React, { useEffect, useState } from "react";
import styles from './css_modules/NewMenuItemCard.module.scss'
import  jwt  from "jsonwebtoken";
import { useAlert } from 'react-alert'

import { Button, Row, Col, Card, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import { set } from "react-hook-form";



export default function NewMenuItemCard(props) 
{
    const [newItem, setNewItem] = useState({item_name: "", item_description: "",item_image: "",menu_name:"", item_price: null});

    const alert = useAlert()

    useEffect( () => {
    
    })



    const handleInputChange = (event) => {
        setNewItem((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };

      const getMenuId = () => {
        const decodedToken = jwt.decode(props.jwt)
          let path = "https://voulutora-backend.herokuapp.com/restaurants/"+props.category+"/menu/"+decodedToken.restaurantInfo
          console.log(path+" path");
          axios.get(path)
          .then((response) => {
              console.log(response.data[0].id);
              newItem.menu_name = response.data[0].id
          })
      }

      
      const addItem = () => {
        const decodedToken = jwt.decode(props.jwt)
        console.log(newItem);
        let path = "https://voulutora-backend.herokuapp.com/restaurants/"+decodedToken.restaurantInfo+"/item"
        axios.post(path, {
            item_name: newItem.item_name,
            item_description: newItem.item_description,
            item_image: newItem.item_image,
            menu_name: newItem.menu_name,
            item_price: parseInt(newItem.item_price)

        })
        .then((response) => {
            console.log(response);
            alert.show("Item added")
            setTimeout(() => {
                window.location.reload()
                },1500)

        })
        .catch((err) => {
            console.log(err);
        })
    }


    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("image", files[0])
        axios.post('https://voulutora-backend.herokuapp.com/manager/upload', formData
        )
        .then((response) => {
          console.log(response.data)
          newItem.item_image = response.data;
          getMenuId()
        })
        console.log(files[0]);
        
      }


return(
    <Col sm={12} lg={6} xl={4}>
        <h3>Add new item to {props.category}</h3>
                <Card style={{width:"300px",height:"450px"}}>
                    
                    <Card.Img className={styles.cardImage} src={newItem.item_image} />
                        <Card.Body className="g-0">
                                
                                    <Row>
                                        <Col xs={12}>
                                            <Form.Group controlId="formFileSm" className="mb-2">
                                                <Form.Control type="file" name="item_image" onChange={(event) => {
                                                                         uploadImage(event.target.files)}} size="sm" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Card.Title>
                                                    <Form.Group>
                                                        <Form.Control type="text" name="item_name" placeholder="Item name" onChange={handleInputChange}></Form.Control>
                                                    </Form.Group>
                                                </Card.Title>
                                            <Card.Text>
                                            <Form.Group>
                                                        <Form.Control type="text" name="item_description" placeholder="Description" onChange={handleInputChange}></Form.Control>
                                                    </Form.Group>
                                            </Card.Text>
                                            {/* <Card.Text>L,G,V</Card.Text> */}
                                        </Col>
    
                                        <Col xs={6}>
                                            <div style={{textAlign:"right"}}>
                                                <div className="">
                                                    {/* <Button variant="danger">Delete</Button> */}
                                                </div>
                                                <div className="">
                                                    <Card.Title>
                                                    <Form.Group>
                                                        <Form.Control type="number" placeholder="Price (€)" name="item_price" onChange={handleInputChange}></Form.Control>
                                                    </Form.Group>
                                                    </Card.Title>
                                                    <Button style={{width:"100%"}} variant="success" onClick={addItem} >Create</Button>
                                                </div>
                                            </div>
                                        </Col>


                                    </Row>
                               
    
                        </Card.Body>
    
                </Card>
                </Col>
)
  }
  

