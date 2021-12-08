import React from "react";
import styles from './css_modules/PageFiller.module.scss';


// This component is used to fill out any extra space left between the page footer and page content
// so that the footer always sits at the bottom of the page
export default function PageFiller(props) 
{

    // TODO: Finish this fancy function some day
    const footerHeight = 180;
    var calculateEmptySpace = function(){
        var emptySpace = 0;


        return emptySpace + "px";
    }


    return(



        <div style={{marginTop:visualViewport.height*0.75}}>
            
        </div>
    )
  }