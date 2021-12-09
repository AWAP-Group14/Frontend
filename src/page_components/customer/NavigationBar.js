import React from "react";
import { Link } from "react-router-dom";
import styles from './css_modules/NavigationBar.module.scss'
import  Jwt  from "jsonwebtoken";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function NavigationBar(props) {

    const navigate = useNavigate();


        // Checks from the passed jwt token wheter user is manager
        const isManager = function(){
            
            const decodedToken = Jwt.decode(props.jwt);
    
                    <Form className="d-flex ms-4 me-auto">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button className="me-2" variant="success">Search</Button>
                        <Link to="/browse" style={{textDecoration: 'none'}}>
                            <Button >Browse</Button>
                        </Link>
                    </Form>
            if (decodedToken == null) {
                return false;
            }
    
            if (decodedToken.isManager == true) {
                return true;
            }
    
            else{
                return false;
            }
        }

    // If user has not signed in (has no token), show this view
    if (props.jwt == null) {

        return(
            <Navbar bg="dark" variant="dark" className={styles.navigationBar}>
            <Container fluid>
                
            <Link to="/" style={{textDecoration: 'none'}}>
                <Navbar.Brand >Voulutora</Navbar.Brand>
            </Link>

                <div className="d-flex ms-4 me-auto">
                    <Link to="/browse" style={{textDecoration: 'none'}}>
                        <Button variant="primary">Browse Restaurants</Button>
                    </Link>
                </div>

                <div className="justify-content-end">
                    <Link to="/signup" style={{textDecoration: 'none'}}>
                        <Button className="me-2" variant="primary">Sign Up</Button>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <Button className="me-2" variant="success">Sign In</Button>
                    </Link>
                </div>

            </Container>
        </Navbar>
        )
            
    } 

    // If user is manager, show this view
    else if(isManager() == true)
    {
        const decodedToken = Jwt.decode(props.jwt);

        return(            
        <Navbar bg="dark" variant="dark" className={styles.navigationBar}>
            <Container fluid>
                
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand >Voulutora Manager</Navbar.Brand>
                </Link>
                <Navbar.Text>{decodedToken.restaurantInfo}</Navbar.Text>
                

                <div className="justify-content-end">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Button className="me-4" variant="secondary">Dashboard</Button>
                    </Link>
                    <Button onClick={props.logout} variant="danger">Sign Out</Button>
                </div>

            </Container>
        </Navbar>)
    }
    
    // If user is customer, show this view
    else if(isManager() == false){
        const decodedToken = Jwt.decode(props.jwt);

        return(
            <Navbar bg="dark" variant="dark" className={styles.navigationBar}>
            <Container fluid>
                
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand >Voulutora</Navbar.Brand>
                </Link>

                <div className="d-flex ms-4 me-auto">
                    <Link to="/browse" style={{textDecoration: 'none'}}>
                        <Button variant="primary">Browse Restaurants</Button>
                    </Link>
                </div>

                <Navbar.Text className="me-4">Logged in as {decodedToken.userInfo.customer_first_name} {decodedToken.userInfo.customer_last_name}</Navbar.Text>

                <div className="justify-content-end">
                    <Link to="/profile" style={{textDecoration: 'none'}}>
                        <Button className="me-2" variant="secondary">profile</Button>
                    </Link>
                        <Link to="/cart"><Button className="me-4" variant="primary">Shopping Cart</Button></Link>
                        <Button onClick={props.logout} variant="danger">Sign Out</Button>
                </div>

            </Container>
        </Navbar>
        )
        
    }

    // If all other checks fail, show this view
    else{
        <Navbar bg="dark" variant="dark" className={styles.navigationBar}>
            <h1>Something went wrong trying to load navigation bar!</h1>
        </Navbar>
    }


  }

