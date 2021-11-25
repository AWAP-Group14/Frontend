import React from "react";


export default function BootstrapGlobals(props) 
{
    let isManager = true;


    // TODO: Add backend functionality
    // TODO: Add manager functionality
    // TODO: Add shoppingcart functionality
    return(   
        <head>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
        
            <script>var Alert = ReactBootstrap.Alert;</script>
        </head>     

    )
  }
  