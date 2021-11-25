import React from "react";
import styles from './css_modules/RestaurantItemCard.module.css'

export default function RestaurantItemCard(props) 
{
    let isManager = true;


    // TODO: Add backend functionality
    // TODO: Add manager functionality
    // TODO: Add shoppingcart functionality
    return(        
        <div className={styles.root}>
            <div className={styles.cardContainer}>
                <div className={styles.leftColumn}>
                    <img className={styles.cardImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg"></img>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.rightColumnLeftColumn}>
                        <p>Item name</p>
                        <p>Item description</p>
                        <p>L,G,V</p>
                    </div>

                    <div className={styles.rightColumnRighColumn}>
                        <div className={styles.rightColumnRighColumnTop}>
                            <button>Delete</button>
                        </div>
                        <div className={styles.rightColumnRighColumnBottom}>
                            <p>XXX€</p>
                            <button>Add to cart</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
  }
  

