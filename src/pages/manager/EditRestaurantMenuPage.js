import React, {useEffect, useState} from 'react';
import styles from './css_modules/EditRestaurantMenuPage.module.scss'

import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import RestaurantInfoBox from "../../page_components/customer/RestaurantInfoBox";
import RestaurantMenuCategories from "../../page_components/customer/RestaurantMenuCategories";
import RestaurantItems from "../../page_components/customer/RestaurantItems";
import RestaurantItemCard from "../../page_components/shared/RestaurantItemCard";
import NewMenuItemCard from '../../page_components/manager/NewMenuItemCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Card, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

import axios from 'axios';
import jwt from 'jsonwebtoken';




export default function EditRestaurantMenuPage(props) 
{
    let params = useParams();
    const [info, setInfo] = useState({
        name: "",
        address: "",
        operating_hours: [],
        image: "",
        email: "",
        type: "", 
        price_level: 0
    });

    const [newCategory, setNewCategory] = useState({newCategory: ""});

    const [categories, setCategories] = useState([])

    const [items, setItems] = useState([{
        itemId: "", name: "", description: "", image: "", category: "", price: 0}, {name: "", description: "", image: "", category: "", price: 0} ])

    //This function returns an array of string with unique category from the input of array of object
    const filterCategory = (data) => {
        const categoryArray = []
        data.forEach(item => { categoryArray.push(item.menu_name)})
        const nonDuplicateArray = Array.from(new Set(categoryArray));
        return nonDuplicateArray
    }

    const createMenuArray = (data) => {
        const itemArray = []
        data.forEach(item => { itemArray.push({
            itemId: item.id, name: item.item_name, description: item.item_description, image: item.item_image, category: item.menu_name, price: item.item_price
        })})
        return itemArray
    }

    useEffect( () => {
        const decodedToken = jwt.decode(props.jwt)
        let path = 'https://voulutora-backend.herokuapp.com/restaurants/' + decodedToken.restaurantInfo
        axios.get(path)
        .then(response => {
            setInfo({name: response.data[0].restaurant_name, type: response.data[0].restaurant_type, address: response.data[0].restaurant_address, operating_hours: response.data[0].restaurant_operating_hours.split(";"), email: response.data[0].restaurant_email, image: response.data[0].restaurant_image, price_level: response.data[0].restaurant_price_level})
            setCategories(filterCategory(response.data))
            setItems(createMenuArray(response.data))
            console.log(JSON.stringify(response.data)+" response data")
        })
        .catch(err => {
            console.log(err);
        })

        console.log(categories[0]+" testing categories");


    }, []);

    const handleInputChange = (event) => {
        setNewCategory((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };

    const addCategory = () => {
        const decodedToken = jwt.decode(props.jwt)
        let path = "https://voulutora-backend.herokuapp.com/restaurants/"+decodedToken.restaurantInfo+"/menu"
        axios.post(path, {
            menu_name: newCategory.newCategory,
            restaurant_name: decodedToken.restaurantInfo

        })
        .then(response => {
            console.log(response);
            console.log("new category added");
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    }

    const deleteCategory = () => {
        const decodedToken = jwt.decode(props.jwt)
        let path = "https://voulutora-backend.herokuapp.com/restaurants/"+decodedToken.restaurantInfo+"/menu/"
        console.log(path);
        axios.delete(path)
        .then(response => {
            console.log(response);
            console.log("category deleted");
            //window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(        
        <div className={styles.root}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>

            <div className={styles.restaurantHeader}>
                <div className={styles.restaurantBannerFader}>
                    <Image className={styles.restaurantHeaderImage} src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg"/>
                </div>
                <div className={styles.restaurantInfo}>
                    <RestaurantInfoBox restaurantInfo={info}/>
                </div>
            </div>



            <Container fluid={true} className="pt-3">

                <Row className="g-10">

                    <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                       <div  className={styles.sidebarSticky}>
                            <h2>Categories</h2>
                            {categories.map((cat) => <RestaurantMenuCategories deleteCategory={deleteCategory} category={cat}/>)}
                            <input
                            type="text"
                            name="newCategory"
                            value={newCategory.newCategory}
                            onChange={handleInputChange}
                            />
                            <Button onClick={addCategory}>Add new catgegory</Button>
                        </div>
                    </Col>

                    <Col xs={6} sm={7} md={8} lg={9} xl={10}>
                        <Row className="g-4">
                        {categories.map((cat) => <RestaurantItems category={cat} jwt={props.jwt} items={items.filter(item => (item.category == cat && item.name != null))}/>)}
                        <NewMenuItemCard/>
                        </Row>
                    </Col>

                </Row>

            </Container>
            <Footer jwt={props.jwt}/>
        </div>
    )
  }
  

