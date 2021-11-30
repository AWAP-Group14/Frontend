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

const NavigationBar = props => {
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
                        <Button className="me-2" variant="secondary">Sign In</Button>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <Button className="me-2" variant="primary">Sign Up</Button>
                    </Link>
                        <Button variant="primary">Shopping Cart</Button>
                </div>

            </Container>
        </Navbar>
    )
  }
  
  export default NavigationBar;