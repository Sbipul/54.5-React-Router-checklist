import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faIndustry} />
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#">{element} SRBC.LTD</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <NavLink className="text-light me-4 text-decoration-none" to="/home">Home</NavLink>
                <NavLink className="text-light me-4 text-decoration-none" to="/other">Check-My-Error-Page-Here</NavLink>
                <NavLink className="text-light me-4 text-decoration-none" to="/details">Details</NavLink>
                <NavLink className="text-light me-4 text-decoration-none" to="/chart">Chart</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;