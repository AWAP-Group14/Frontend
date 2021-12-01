import React from "react";
import { Link } from "react-router-dom";
import styles from './css_modules/NavigationBar.module.scss'

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const NavigationBar = props => {

    const navigate = useNavigate();

    if (props.jwt != null) {

        return(
            <Navbar className={styles.navigationBar}>
                <Container fluid>
                    
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand >Voulutora</Navbar.Brand>
                </Link>
    
                    <Form className="d-flex ms-4 me-auto">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button className="me-2" variant="success">Search</Button>
                        <Link to="/browse" style={{textDecoration: 'none'}}>
                            <Button variant="primary">Browse</Button>
                        </Link>
                    </Form>
    
                    <div className="justify-content-end">
                        <Link to="/profile" style={{textDecoration: 'none'}}>
                            <Button className="me-2" variant="secondary">profile</Button>
                        </Link>
                            <Button variant="primary">Shopping Cart</Button>
                            <Button onClick={props.logout} variant="primary">Sign Out</Button>
                    </div>
    
                </Container>
            </Navbar>
        )
            
    } else {

        return(
            <Navbar className={styles.navigationBar}>
                <Container fluid>
                    
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand >Voulutora</Navbar.Brand>
                </Link>
    
                    <Form className="d-flex ms-4 me-auto">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button className="me-2" variant="success">Search</Button>
                        <Link to="/browse" style={{textDecoration: 'none'}}>
                            <Button variant="primary">Browse</Button>
                        </Link>
                    </Form>
    
                    <div className="justify-content-end">
                        <Link to="/signup" style={{textDecoration: 'none'}}>
                            <Button className="me-2" variant="secondary">Sign Up</Button>
                        </Link>
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <Button className="me-2" variant="primary">Sign In</Button>
                        </Link>
                    </div>
    
                </Container>
            </Navbar>
        )
        
    }


  }
  
  export default NavigationBar;