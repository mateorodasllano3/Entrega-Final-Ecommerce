import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'boxicons'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';


const NavBar = () => {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
        <Navbar bg="secondary" expand="lg" className='Nav-Bar-General'>
            <Container className='Container-NavBar'>
                <Navbar.Brand as={Link} to="/">E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/login" className='Nav-Link Login'><box-icon type='solid' name='user'></box-icon></Nav.Link>
                        <Nav.Link as={Link} to="/purchases" className='Nav-Link'><box-icon type='solid' name='box'></box-icon></Nav.Link>
                        <Nav.Link onClick ={handleShow}className='Nav-Link'><box-icon name='cart-alt' type='solid' ></box-icon></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       <Cart show={show} handleClose={handleClose}/>
        </>
    );
};

export default NavBar;