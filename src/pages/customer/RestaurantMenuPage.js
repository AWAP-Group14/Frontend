import React from "react";
import styles from './css_modules/RestaurantMenuPage.module.css'
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from '../../page_components/customer/Footer';
import RestaurantInfoBox from "../../page_components/customer/RestaurantInfoBox";
import RestaurantMenuCategories from "../../page_components/customer/RestaurantMenuCategories";
import RestaurantItemCard from "../../page_components/shared/RestaurantItemCard";


export default function RestaurantMenuPage(props) 
{
    return(        
        <div className={styles.root}>
            <NavigationBar/>
            <div className={styles.restaurantHeader}>
                    <img className={styles.restaurantHeaderImage} src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg"></img>
                </div>

            <div className={styles.restaurantContent}>



                <div className={styles.restaurantCategories}>
                    <RestaurantMenuCategories/>
                </div>

                <div className={styles.restaurantMenuCards}>
                    <div><h3>Category Name 1</h3></div>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <div><h3>Category Name 2</h3></div>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <div><h3>Category Name 3</h3></div>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>
                    <RestaurantItemCard/>

                </div>

                <div className={styles.restaurantInfo}>
                    <RestaurantInfoBox/>
                </div>

            </div>
            <Footer/>
        </div>
    )
  }
  

