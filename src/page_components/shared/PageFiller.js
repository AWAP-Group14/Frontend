import React from "react";
import styles from './css_modules/PageFiller.module.scss';

// This component is used to fill out any extra space left between the page footer and page content
// so that the footer always sits at the bottom of the page
export default function PageFiller(props) 
{


    return(
        <div style={{height:props.fill}}>

        </div>
    )
  }