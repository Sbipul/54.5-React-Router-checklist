import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'

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
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/other">Check-My-Error-Page-Here</Nav.Link>
                <Nav.Link href="/details">Details</Nav.Link>
                <Nav.Link href="/chart">Chart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;