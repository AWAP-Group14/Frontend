import React from "react";
import styles from './css_modules/BrowsePage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import RestaurantCard from '../../page_components/customer/RestaurantCard';
import Footer from '../../page_components/customer/Footer';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BrowsePage(props) 
{
    const [searchTerm, setSearchTerm] = useState('')

    {props.restaurants.map((val,key)=> {
        return val.restaurant_name
    })}
    
    return(
        <div className={styles.container}>
            <NavigationBar jwt={props.jwt} logout={props.logout}/>
            <div className={styles.filterContainer}>
                <p>Restaurants in your area</p>
                <input type="text" placeholder="SEARCH" onChange={(event =>{
                    setSearchTerm(event.target.value)
                })}></input>
            </div> 
            <div className={styles.RestaurantCard}>
             {
             props.restaurants.filter((val)=>{
                 if (searchTerm == "") {
                     return val
                 }
                 else if (val.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                     return val
                 }
             }).map(restaurant => 
             <Link to={"/restaurant/"+restaurant.restaurant_name} style={{textDecoration: 'none'}}><RestaurantCard key={restaurant.restaurant_name} {...restaurant} /></Link> )
             }
            </div>
            <Footer jwt={props.jwt}/>
        </div>
    )
  }
  

